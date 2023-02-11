import axios from "axios";
import {User} from "../shared/user";



const AUTH_URL =  'http://localhost:8080/auth'
export default new class AuthService {
    signUp(user: User) {
        return axios.post(AUTH_URL + "/sign-on", user);
    }
    signIn(email: string, password: string) {
        return axios.post(AUTH_URL + "/sign-in", {
            email,
            password
        })
        .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data));
            return res.data
        });
    }
    signOut() {
        localStorage.removeItem("user");
    }
    getCurrentUser() {
        const user = localStorage.getItem("user");
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
}()