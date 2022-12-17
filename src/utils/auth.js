const auth = {
  isAuthorization() {
    if (localStorage.getItem("token")) return true;
  },
  getUserId() {
    // return Cookies.get("userId");
  },
  signOut(navigate) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("auth");
    alert("Berhasil log out");
    navigate("/login");
  },
};

export default auth;
