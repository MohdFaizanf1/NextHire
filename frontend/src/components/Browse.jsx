import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchJobByText } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();

  const { allJobs, searchJobByText } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const filteredJobs = allJobs.filter((job) => {
    if (!searchJobByText) return true;

    const search = searchJobByText.toLowerCase();

    if (search === "0-40k") {
      return job.salary >= 0 && job.salary <= 40000;
    }

    if (search === "42-1lakh") {
      return job.salary >= 42000 && job.salary <= 100000;
    }

    if (search === "1lakh to 5lakh") {
      return job.salary >= 100000 && job.salary <= 500000;
    }

    if (search === "5lakh+") {
      return job.salary >= 500000;
    }

    return (
      job?.title?.toLowerCase().includes(search) ||
      job?.description?.toLowerCase().includes(search) ||
      job?.location?.toLowerCase().includes(search) ||
      job?.company?.name?.toLowerCase().includes(search) ||
      job?.jobType?.toLowerCase().includes(search) ||
      job?.experienceLevel?.toLowerCase().includes(search)
    );
  });

  useEffect(() => {
    return () => {
      dispatch(setSearchJobByText(""));
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({filteredJobs.length})
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <Job key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;