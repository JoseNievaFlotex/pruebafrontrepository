import axios from "axios";
// import { toastme } from "toastmejs";
// import LocalStorage from './localStorage';


const api = axios.create({
  baseURL : "https://herokuservicerestapi.herokuapp.com",
});

export const loginUser = async ({email, password}) => {
  try {
    const {data} = await api.post("/user/login", {email, password});
    return data;
    
  } catch (error) {
    throw Error(error.response.data.message);
  }
  
}
// if(data)
//     {
//       toastme.success(`Bienvenido al sistema ${data.name}`);
//       LocalStorage.guardarAutorizacion(data);
//     }
// const login = async (credentials) => {
//   const { data } = await axios.post(`${baseURL}`, credentials);
//   return data;
// };

export default  loginUser ;