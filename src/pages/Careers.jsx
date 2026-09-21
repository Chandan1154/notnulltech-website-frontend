import { useEffect, useState } from "react";
import CareerCard from "../components/CareerCard";
import { fetchJobs } from "../services/careersService";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await fetchJobs();      
      setJobs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading jobs...</div>;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-12 text-center text-5xl font-bold">
        Join NotNullTech
      </h1>

      {jobs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl font-medium">No jobs available on this page.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <CareerCard key={job.id} {...job} />
          ))}
        </div>
      )}
    </section>
  );
}