import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/Utility";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == idInt);
  console.log(id, job);

  const handleApply = () => {
    saveJobApplication(idInt);
    toast.success("Applied Successfully");
  };

  return (
   
    <div className="grid md:grid-cols-4 gap-4 my-12">
      
        
      <div className=" md:col-span-3 space-y-3">
        <h1>
          <span className="font-bold">Job description: </span>
          {job.job_description}
        </h1>
        <h1>
          <span className="font-bold">Job Responsibility: </span>
          {job.job_responsibility}
        </h1>
        <h1>
          <span className="font-bold">Education Required : </span>
          {job.educational_requirements}
        </h1>
        <h1>
          <span className="font-bold"> Educations : </span>
          {job.experiences}
        </h1>
      </div>

      {/* right */}
      <div className=" space-y-3 p-5 bg-[#d9cff8]">
        <h1 className="font-bold">Job Details</h1>
        <h3>
          <span className="font-bold">Salary : </span>
          {job.salary}
        </h3>
        <h3>
          <span className="font-bold">Job Title : </span>
          {job.job_title}
        </h3>

        <h1 className="font-bold">Contact Information</h1>
        <h3>
          <span className="font-bold">Phone : </span>
          {job.contact_information.phone}
        </h3>
        <h3>
          <span className="font-bold">Email : </span>
          {job.contact_information.email}
        </h3>
        <h3>
          <span className="font-bold">Address : </span>
          {job.contact_information.address}
        </h3>

        <button
          onClick={handleApply}
          className="w-full btn-primary bg-violet-400 rounded-xl py-4"
        >
          Apply Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
