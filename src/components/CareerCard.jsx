import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function CareerCard({
  id,
  title,
  type,
  location = "Remote / Bengaluru",
  description,
}) {
  const navigate = useNavigate();


  const handleApply = () => {
    navigate(`/careers/${id}/apply`);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <Briefcase className="text-blue-600" />

        <div>
          <h3 className="text-xl font-semibold">{title}</h3>

          <span className="text-sm text-gray-500">{type}</span>
        </div>
      </div>

      <p className="mb-5 text-gray-600">{description}</p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          📍 {location}
        </span>

        <button
          onClick={handleApply}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}