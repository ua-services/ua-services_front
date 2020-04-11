import fetch from "./customFetch";
import { API_URL } from "./constants";

const auth = {
  async login(data) {
    console.log(data);
    try {
      return await fetch(`${API_URL}/user/sign_in`, {
        method: "POST",
        body: JSON.stringify(data)
      })
    } catch (err) {
      if (err.response && err.response.data) throw err.response.data;
      throw err;
    }
  },

  async register(data) {
    try {
      return await fetch(`${API_URL}/user`, {
        method: "POST",
        body: JSON.stringify(data)
      })
    } catch (err) {
      if (err.response && err.response.data) throw err.response.data;
      throw err;
    }
  }
};

export default auth;
