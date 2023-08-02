import axios from "axios";

export const fetchServices = async () => {
  const response = await axios.get(`http://localhost:7070/api/services`);
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};

export const fetchSingleService = async (id) => {
  const response = await axios.get(`http://localhost:7070/api/services/${id}`);
  if (response.ok) {
    throw new Error(response.statusText);
  }
  return await response.data;
};
