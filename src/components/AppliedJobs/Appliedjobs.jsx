import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Utility";

const Appliedjobs = () => {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
    console.log(jobs, storedJobsIds, jobsApplied);
  }, []);

  return (
    <div>
      <h1>applied jobs</h1>
    </div>
  );
};

export default Appliedjobs;
