import apiRequest from "../Axios/axios";
import Cookies from 'js-cookie';

const refreshToken = async () => {
    try {
        const response = await apiRequest.post("auth/verifyOtp", {refreshToken: Cookies.get('token')})
        console.log(response);
        // const data = await response.data;
        // return data
    } catch (error) {
        console.log(error);

    }

}


export default refreshToken