import Cookies from "js-cookie";

const auth = {
  isAuthorization() {
    if (Cookies.get("token") && Cookies.get("username")) return true
    return false
  },
  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("username");
    alert("Berhasil log out");
    navigate("/login");
  },
};

export default auth;
