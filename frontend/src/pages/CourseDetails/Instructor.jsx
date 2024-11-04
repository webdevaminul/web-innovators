
// import instructorImg from "../../assets/sumitSaha.jpg";
import PropTypes from "prop-types";

const Instructor = ({singleCourse={}}) => {
  const { coverPicture} = singleCourse ;
console.log(singleCourse.coverPicture , 'heee')
  return (
    <div className="mt-10 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 md:border-r-4 md:border-secondary md:pl-10">
        <img
          className="rounded-[29%_71%_75%_25%_/_47%_41%_59%_53%] mx-auto h-96 "
          src={coverPicture}
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 pl-8">
        <h1 className="text-sm">
          Sumit Saha is a tech entrepreneur. While studying Computer Science and
          Engineering at BUET, he founded Bangladesh&apos;s first digital agency,
          Analyzen, in 2008. Driven by his love for programming and passion for
          teaching others, he later founded the &quot;Learn with Sumit&qout; platform in
          2020, which offers over 350+ programming-related video tutorials.
        </h1>
        <p className="text-sm">
          He is a Full Stack Web Developer and Software Architect, and he has
          been involved in the web development and software profession for over
          14 years.
        </p>

        <p className="font-medium mt-2">Sumit Saha</p>
        <p className="font-normal">Founder - Learn with Sumit</p>
      </div>
    </div>
  );
};
Instructor.propTypes = {
  singleCourse: PropTypes.object,
};
export default Instructor;
