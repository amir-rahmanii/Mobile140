import axios from 'axios'
import Cookies from 'js-cookie'




const apiRequest = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer ${Cookies.get('token')}`
  }
});

// apiRequest.interceptors.response.use(
//   async response => {
//     console.log(response);
//     if (response.data.name === "TokenExpiredError") {
//       // let token = await refreshToken();
//       // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
//     }
//     return response;
//   },
//   error => {
//     console.log(error);
//   }
// );


export default apiRequest