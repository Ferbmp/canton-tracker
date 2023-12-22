// src/hooks/useCantons.ts
import { useState, useEffect } from "react";
import axios from "axios";

interface Canton {
  isoCode: string;
  name: [{ language: string; text: string }];
}

const useCantons = () => {
  const [cantons, setCantons] = useState<Canton[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCantons = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Canton[]>(
          "https://openholidaysapi.org/Subdivisions?countryIsoCode=CH"
        );
        setCantons(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCantons();
  }, []);

  return { cantons, loading, error };
};

export default useCantons;
