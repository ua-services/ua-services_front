import fetch from "./customFetch";
import { API_URL } from "./constants";

const auth = {
    async login(data) {
      try {
        return await fetch(`${API_URL}/users/`, {
          method: "POST",
          body: JSON.stringify(data)
        })
      } catch (e) {

      }
    }
};

import auth;
