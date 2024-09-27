const DiscountedCard = ({ course }) => {
  return (
    <div className="bg-accentOne border border-border rounded-2xl overflow-hidden cursor-pointer">
      <div>
        <figure className="h-52">
          <img
            src="./course_banner01.jpeg"
            className="w-full object-cover object-center h-full"
          />
        </figure>

        <div className="relative h-32 p-4 border-t border-border">
          <p className="flex items-center justify-center gap-4 p-2 rounded-lg bg-secondary w-[80%] absolute top-[-2rem] right-1/2 transform translate-x-1/2">
            <span className="font-black text-xl">BDT {course?.newPrice}</span>
            {course.oldPrice && (
              <span className="line-through">{course.oldPrice}</span>
            )}
          </p>
          <h3 className="card-title absolute top-4 left-0 px-2 text-center">
            {course.name}
          </h3>
          <p className="absolute bottom-0 left-0 w-full p-2 text-center text-text/70">
            Instructor: {course.instructorName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountedCard;
