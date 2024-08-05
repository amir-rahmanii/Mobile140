import Cookies from 'js-cookie'

 const isAuth = () => {
    const cookie = Cookies.get('token')
    if (cookie) {
        return true
    } else {
        return false
    }
}


export default isAuth