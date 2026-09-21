import { useEffect, useState } from "react";
import { fetchJobs } from "../services/careersService";

export default function useCareers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs()
      .then(setJobs)
      .finally(() => setLoading(false));
  }, []);

  return {
    jobs,
    loading,
  };
}