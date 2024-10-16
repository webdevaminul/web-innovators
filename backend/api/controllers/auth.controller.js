const jwt = require("jsonwebtoken");
const { client } = require("../config/mongoDB");
const bcryptjs = require("bcryptjs");
const database = client.db("LearnUp");
const nodemailer = require("nodemailer");
const userCollection = database.collection("users");
const { errorHandler } = require("../utilities/errorHandler");

// const { sendSignupVerification } = require("../utilities/sendSignupVerification");
// const { sendRecoveryMail } = require("../utilities/sendRecoveryMail");

// create api with export.api_function
exports.signup = async (req, res, next) => {
  try {
    // Extract the user's username, email, and password from the request body
    const { userName, userEmail, userPassword } = req.body;
    console.log("email", req.body);

    // Check if the username or email already exists in the database
    const existingUser = await userCollection.findOne({
      $or: [{ userName: userName }, { userEmail: userEmail }],
    });

    // If a user with the same username or email already exists, return an error message
    if (existingUser) {
      if (existingUser.userName === userName) {
        return next(errorHandler(409, `Username "${userName}" is already taken`));
      } else if (existingUser.userEmail === userEmail) {
        return next(errorHandler(409, `Email "${userEmail}" is already registered`));
      }
    }

    // Generate a token for email varification
    const verificationToken = jwt.sign(
      { userName, userEmail, userPassword },
      process.env.JWT_ACCESS_TOKEN_SECRET
    );

    // Send a verification email with the verification token
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5173"
        : "https://web-innovators-learnup.vercel.app";
    const verificationLink = `${baseUrl}/email-verify?token=${verificationToken}`;

    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    // Define the email content
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: userEmail,
      subject: "LearnUP Account Verification",
      html: `
      <h1 style="font-size:26px;">Welcome to <span style="color:rgb(51, 51, 51)">Learn</span><span style="color:rgb(240, 138, 36)">UP</span></h1>
      <p style="font-size:18px;">To complete your registration, please verify your email by clicking the button below.</p>
      <p><a href="${verificationLink}" style="text-decoration:none;background-color:rgb(240, 138, 36); padding:8px; color:rgb(51, 51, 51); font-weight:500; font-size:20px">Verify & Sign in</a>.</p>
      
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send a success response
    return res
      .status(200)
      .json({ success: true, message: `Please check "${userEmail}" to verify your account.` });
  } catch (error) {
    // Pass any other errors to the error-handling middleware
    next(error);
  }
};

exports.emailVerify = async (req, res, next) => {
  try {
    // Extract the verification token from the request query parameters
    const { token } = req.query;

    console.log("token in backend", token);

    // Return error if the token is not valid
    if (!token) {
      return next(errorHandler(401, "Invalid email verification token"));
    }

    // Verify the verification token
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
    const { userName, userEmail, userPassword } = decoded;

    console.log("in backend", userName, userEmail, userPassword);

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(userPassword, 10);

    console.log("hashedPassword", hashedPassword);

    // Check if the user already exists
    let user = await userCollection.findOne({ userEmail: userEmail });

    // Create a new user with the verified email and hashed password
    if (!user) {
      user = {
        userName: userName,
        userEmail: userEmail,
        userPassword: hashedPassword,
        userPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlszH7tmKiwhO2EhbnXeR5iQg8ct-k5_MYw&s",
        userRole: "student",
        isVerified: true,
        isGoogle: false,
      };

      // Insert the new user into the database
      await userCollection.insertOne(user);
    }

    console.log("user", user);

    // Generate a JWT access token for login the user
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });

    // Generate a JWT refresh token for login the user
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESH_TOKEN_SECRET,
      { expiresIn: "180d" } // Refresh token expires in 6 months
    );

    // Set the refresh token in a cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 6 * 30 * 24 * 60 * 60 * 1000, // 6 months in milliseconds
    });

    // Remove the password from the user object before sending it back to the client
    const { userPassword: pass, ...userInfo } = user;

    // Send a success response
    return res.status(201).json({
      success: true,
      message: "Email verification successful",
      token: accessToken,
      userInfo,
    });
  } catch (error) {
    // Pass any other errors to the error-handling middleware
    next(error);
  }
};

exports.signOut = async (req, res, next) => {
  try {
    // Clear the authentication token from the cookie
    res.clearCookie("refreshToken");

    // Send a success response
    return res.status(200).json({ success: true, message: "Signout successful" });
  } catch (error) {
    // Pass any other errors to the error-handling middleware
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    // Extract the user's email, and password from the request body
    const { userEmail, userPassword } = req.body;

    // Check if the user with the provided email exists
    const validUser = await userCollection.findOne({ userEmail: userEmail });

    // If the user is not found or not verified, return an error message
    if (!validUser || !validUser.isVerified) {
      return next(errorHandler(404, "Invalid email or password"));
    }

    // Compare the provided password with the hashed password stored in the database
    const validPassword = await bcryptjs.compare(userPassword, validUser.userPassword);

    // If the passwords do not match, return an error message
    if (!validPassword) {
      return next(errorHandler(400, "Invalid email or password"));
    }

    // Generate a JWT access token for login the user
    const accessToken = jwt.sign({ id: validUser._id }, process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });

    // Generate a JWT refresh token for login the user
    const refreshToken = jwt.sign(
      { id: validUser._id },
      process.env.JWT_REFRESH_TOKEN_SECRET,
      { expiresIn: "180d" } // Refresh token expires in 6 months
    );

    // Set the refresh token in a cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 6 * 30 * 24 * 60 * 60 * 1000, // 6 months in milliseconds
    });

    // Remove the password from the user object before sending it back to the client
    const { userPassword: pass, ...userInfo } = validUser;

    // Send a success response
    return res
      .status(201)
      .json({ success: true, message: "Login successful", token: accessToken, userInfo });
  } catch (error) {
    // Pass any other errors to the error-handling middleware
    next(error);
  }
};

exports.forgetPassword = async (req, res, next) => {
  try {
    // Extract the user's email from the request body
    const { userEmail } = req.body;

    // Check if the email exists in the database
    const existingUser = await userCollection.findOne({ userEmail });

    // If user not found with the same email, return an error message
    if (!existingUser) {
      return next(errorHandler(404, `No user found with email "${userEmail}"`));
    }

    // Generate a token for email verification
    const recoveryToken = jwt.sign({ userEmail }, process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: "5m",
    });

    // Create the recovery link using the token
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5173"
        : "https://web-innovators-learnup.vercel.app";
    const recoveryLink = `${baseUrl}/password-recovery?token=${recoveryToken}`;

    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    // Define the email content
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: userEmail,
      subject: "WDAR Estate Password Reset",
      html: `
        <h1 style="font-size:26px;">Reset Password</h1>
        <p style="font-size:18px;">Click on the following link to reset your password:</p>
        <p><a href="${recoveryLink}" style="text-decoration:none;background-color:rgb(255, 95, 31); padding:8px; color:white; font-weight:500; font-size:20px">Reset Password</a>.</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send a success response
    return res.status(200).json({
      success: true,
      message: `Please check "${userEmail}" to reset your password. Recovery link is valid for 5 minutes.`,
    });
  } catch (error) {
    next(error); // Pass errors to the error-handling middleware
  }
};

exports.recoverPassword = async (req, res, next) => {
  try {
    // Extract the verification token from the request query parameters
    const { token } = req.query;

    // Extract the new password from the request body
    const { newPassword } = req.body;

    // Check if newPassword is valid
    if (!newPassword) {
      return next(errorHandler(400, "New password is required"));
    }

    // Return an error if the token is not present
    if (!token) {
      return next(errorHandler(400, "Token is missing or invalid"));
    }

    let decodedToken;
    let userEmail;

    // Verify and decode the token
    try {
      decodedToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
      userEmail = decodedToken.userEmail;
    } catch (error) {
      // This block will catch tampered or expired tokens
      return next(errorHandler(401, "Invalid or expired token. Password not changed."));
    }

    // Ensure the user with this email exists in the database
    const existingUser = await userCollection.findOne({ userEmail });

    // If user not found, return an error
    if (!existingUser) {
      return next(errorHandler(404, `No user found with email "${userEmail}"`));
    }

    // Hash the new password
    const hashedPassword = bcryptjs.hashSync(newPassword, 10);

    // Update the user's password
    const updateResult = await userCollection.updateOne(
      { userEmail }, // Find by userEmail
      { $set: { userPassword: hashedPassword } } // Update the password
    );

    if (updateResult.modifiedCount === 0) {
      return next(errorHandler(500, "Failed to update the password. Please try again."));
    }

    // Send a success response
    return res.status(200).json({
      success: true,
      message: "Password reset successfully, you can sign in now.",
    });
  } catch (error) {
    next(error);
  }
};
