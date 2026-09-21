import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { submitApplication } from "../../services/careersService";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  coverLetter: "",
  resume: null,
};

export default function ApplyJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const resumeInputRef = useRef(null);
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jobId) {
      setStatus({ loading: false, error: "Invalid job selection.", success: "" });
      return;
    }

    if (!formData.resume) {
      setStatus({ loading: false, error: "Please upload your resume.", success: "" });
      return;
    }

    const payload = new FormData();
    payload.append("fullName", formData.fullName.trim());
    payload.append("email", formData.email.trim());
    payload.append("phone", formData.phone.trim());
    payload.append("linkedinUrl", formData.linkedin.trim());
    payload.append("portfolioUrl", formData.portfolio.trim());
    payload.append("coverLetter", formData.coverLetter.trim());
    payload.append("resumeUrl", formData.resume.name || "");
    payload.append("resume", formData.resume);

    try {
      setStatus({ loading: true, error: "", success: "" });
      await submitApplication(jobId, payload);
      setStatus({ loading: false, error: "", success: "Your application was sent successfully." });
      setFormData(initialState);
      setTimeout(() => navigate("/careers"), 2000);
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        error:
          err?.response?.data?.message || "Unable to submit your application. Please try again later.",
        success: "",
      });
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold">
          Apply for this Position
        </h1>

        <p className="mb-8 text-gray-600">
          Complete the form below to submit your application.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
            onChange={handleChange}
            value={formData.fullName}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded-lg border p-3"
            onChange={handleChange}
            value={formData.phone}
            required
          />

          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile (Optional)"
            className="w-full rounded-lg border p-3"
            onChange={handleChange}
            value={formData.linkedin}
          />

          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio / GitHub (Optional)"
            className="w-full rounded-lg border p-3"
            onChange={handleChange}
            value={formData.portfolio}
          />

          <textarea
            rows="5"
            name="coverLetter"
            placeholder="Cover Letter (Optional)"
            className="w-full rounded-lg border p-3"
            onChange={handleChange}
            value={formData.coverLetter}
          />

          <div>
            <label className="mb-2 block font-medium">
              Upload Resume
            </label>

            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              ref={resumeInputRef}
              required
            />
          </div>

          {status.error && (
            <p className="text-sm text-red-600">{status.error}</p>
          )}

          {status.success && (
            <p className="text-sm text-green-600">{status.success}</p>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {status.loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}