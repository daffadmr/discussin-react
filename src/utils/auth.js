import Cookies from "js-cookie";

const auth = {
  isAuthorization() {
    if (Cookies.get("token")) return true
  },
  getUserId() {
    // return Cookies.get("userId");
  },
  signOut(navigate) {
    Cookies.remove("auth");
    Cookies.remove("token");
    Cookies.remove("username");
    alert("Berhasil log out")
    navigate("/login");
  },
};

export default auth;
