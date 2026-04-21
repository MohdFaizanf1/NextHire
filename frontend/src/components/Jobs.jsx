import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchJobByText) {
      const search = searchJobByText.toLowerCase();

      const filteredJobs = allJobs.filter((job) => {
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

      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchJobByText]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>

          {filterJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;