import img from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="   flex items-center flex-col md:flex-row mb-12">
      <div className="flex-1 space-y-3">
        <h1 className="text-5xl font-bold">
          One Step Closer To Your{" "}
          <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="bg-[#7E90FE] p-3 rounded-lg">Get Started</button>
      </div>

      <div className="flex-1">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
