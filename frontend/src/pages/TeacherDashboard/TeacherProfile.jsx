import { RiLinkedinFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";
import { useSelector } from "react-redux";

const data = [
  {
    id: 1,
    category: "CATEGORY-1",
    title: "The Catalyzer",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    image:
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    id: 2,
    category: "CATEGORY-2",
    title: "The Catalyzer",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    image:
      "https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    category: "CATEGORY-3",
    title: "The Catalyzer",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    image:
      "https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  },
];

const TeacherProfile = () => {
  const { user } = useSelector((state) => state.authUsers);
  console.log("user", user.userInfo);
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col ">
        {/* Cover Image */}
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="User Cover"
          className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] md:block hidden xs:h-[11rem]"
        />
        {/* Profile Image */}
        <div className="mx-auto md:mt-0 mt-20 flex">
          <img
            src={user.userInfo.userPhoto}
            alt="User Profile"
            className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
          />
          {/* FullName */}
          <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-text lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
            {user.userInfo.userName}
          </h1>
        </div>
        <div className="mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
          {/* Description */}
          <p className="w-fit text-text text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis labore
            consectetur voluptatibus mollitia dolorem veniam omnis ut quibusdam minima sapiente
            repellendus asperiores explicabo, eligendi odit, dolore similique fugiat dolor,
            doloremque eveniet. Odit, consequatur. Ratione voluptate exercitationem hic eligendi
            vitae animi nam in, est earum culpa illum aliquam.
          </p>
          {/* Details */}
          <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
            <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-text md:text-lg">Name</dt>
                    <dd className="text-lg text-text font-semibold">{user.userInfo.userName}</dd>
                  </div>

                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-text md:text-lg ">Email</dt>
                    <dd className="md:text-lg text-text">{user.userInfo.userEmail}</dd>
                  </div>
                </dl>
              </div>
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-text md:text-lg ">Location</dt>
                    <dd className="md:text-lg text-text">Ethiopia, Addis Ababa</dd>
                  </div>
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-text md:text-lg ">Phone Number</dt>
                    <dd className="md:text-lg text-text">+251913****30</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="md:grid grid-cols-3 gap-3">
            {data?.map((card) => (
              <div key={card.id} className="text-text body-font">
                <div className="container px-5 py-4 mx-auto">
                  <div className="h-full rounded-xl shadow-cla-blue bg-backgroundPrimary overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                      src={card.image}
                      alt="blog"
                    />
                    <div className="py-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-text mb-1">
                        {card.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-text mb-3">
                        {card.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{card.description}</p>
                      <div className="flex items-center flex-wrap ">
                        <button className="bg-backgroundPrimary shadow-lg hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-text dark:bg-gray-200/80 dark:text-gray-700 hover:text-text hover:">
            <a href="https://www.linkedin.com/in/samuel-abera-6593a2209/">
              <div className="p-2 hover:text-primary hover:dark:text-primary">
                <RiLinkedinFill className="w-6 h-6" />
              </div>
            </a>
            <a href="https://twitter.com/Samuel7Abera7">
              <div className="p-2 hover:text-primary hover:dark:text-primary">
                <FaXTwitter className="w-6 h-6 text-text" />
              </div>
            </a>
            <a>
              <div className="p-2 hover:text-blue-500 hover:dark:text-blue-500">
                <FiFacebook className="w-6 h-6" />
              </div>
            </a>
            <a href="https://www.youtube.com/@silentcoder7">
              <div className="p-2 hover:text-primary hover:dark:text-primary">
                <IoLogoYoutube className="w-6 h-6 text-red-600" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfile;
