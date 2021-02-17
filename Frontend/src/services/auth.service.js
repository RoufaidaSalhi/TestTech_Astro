import axios from "axios";

const API_URL = "http://localhost:4000/app";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL+"/signin", {
        username,
        password
      })
      .then(response => {
        if (response.status='200') {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register( email, password,ConfirmPassword) {
    return axios.post(API_URL+"/signup", {
      email,
      password,
      ConfirmPassword,

    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();