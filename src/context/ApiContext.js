import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("my_api_url");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
