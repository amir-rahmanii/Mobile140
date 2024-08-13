import axios from 'axios'




const apiRequest = axios.create({
  baseURL: 'http://localhost:4000'
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