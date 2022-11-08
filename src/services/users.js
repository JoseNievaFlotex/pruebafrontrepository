import axios from "axios";
const baseURL = "http://localhost:5000/user";

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getAll =  () => {
    const config = {
        headers: {
            Authorization: token

        }
    }
  const request =  axios.get(`${baseURL}`, config);
  return request.then(response => response.data);
};

const createUser = (newObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.post(baseURL, newObject, config)
    return request.then(response => response.data);
}

export default { getAll, createUser, setToken };