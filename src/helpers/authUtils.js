import { Cookies } from "react-cookie";

const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");

  return user ? (typeof (user) === "object" ? user : JSON.parse(user)) : null;
};

const isUserAuthenticated = () => {
  const user = getLoggedInUser();
  return !!user

};

export { isUserAuthenticated, getLoggedInUser };

