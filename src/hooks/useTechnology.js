import { useEffect, useState } from "react";
import { fetchTechnologies } from "../services/technologyService";

export default function useTechnology() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTechnologies()
      .then(setTechnologies)
      .finally(() => setLoading(false));
  }, []);

  return {
    technologies,
    loading,
  };
}