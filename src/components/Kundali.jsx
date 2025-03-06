import { useState } from "react";
import { useApi } from "../context/ApiContext";

const KundaliForm = () => {
  const { fetchKundali, loading, error, data } = useApi();
  const [formData, setFormData] = useState({
    birthDate: "",
    birthTime: "",
    timeZone: "Asia/Kolkata",
    lat: "",
    lon: "",
    gender: "male",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchKundali(formData); // Send input data to API
  };

  return (
    <div>
      <h2>Enter Birth Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="birthTime"
          value={formData.birthTime}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="lat"
          placeholder="Latitude"
          value={formData.lat}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="lon"
          placeholder="Longitude"
          value={formData.lon}
          onChange={handleChange}
          required
        />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit" disabled={loading}>Get Kundali</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <div>
          <h3>Kundali Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default KundaliForm;
