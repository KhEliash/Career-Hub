import { FaLocationDot } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="my-2 flex gap-2">
            <h2 className="flex gap-1">
              <FaLocationDot className="text-2xl"></FaLocationDot> {location}
            </h2>
            <h2 className="flex gap-1">
              <CiDollar className="text-2xl"></CiDollar> {salary}
            </h2>
          </div>
          <div className="card-actions justify-start">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary text-white">
                {" "}
                View Details{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
