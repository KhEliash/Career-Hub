import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl">Featured Jobs: {jobs.length}</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-12">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={dataLength === jobs.length ? "hidden" : "text-center my-3"}
      >
        <button
          className="btn bg-violet-600 "
          onClick={() => setDataLength(jobs.length)}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Featured;
