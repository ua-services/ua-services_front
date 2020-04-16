import fetch from "./customFetch";
import {API_URL} from "./constants";

const agency = {
  async getOnwAgency(id) {
    try {
      return await fetch(`${API_URL}/agencies/${id}`, {
        method: "GET",
      })
    } catch (err) {
      if (err.response && err.response.data) throw err.response.data;
      throw err;
    }
  },

  async getEmployees() {
    try {
      return await fetch(`${API_URL}/agencies/`, {
        method: "GET",
      })
    } catch (err) {
      if (err.response && err.response.data) throw err.response.data;
      throw err;
    }
  },
};

export default agency;
