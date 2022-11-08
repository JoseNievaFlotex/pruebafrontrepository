import axios from "axios";
const baseURL = "http://localhost:5000/user/login";

const login = async (credentials) => {
  const { data } = await axios.post(`${baseURL}`, credentials);
  return data;
};

export default { login };