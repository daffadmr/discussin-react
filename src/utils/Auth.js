import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("auth") === "true") return true;
  },
  getUserId() {
    // return Cookies.get("userId");
  },
  signOut(navigate) {
    Cookies.remove("auth");
    Cookies.remove("token");
    alert("Berhasil log out")
    navigate("/login");
  },
};

export default Auth;