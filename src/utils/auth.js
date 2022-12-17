const auth = {
  isAuthorization() {
    if (localStorage.getItem("token") && localStorage.getItem("username") && localStorage.getItem("auth")) return true;
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
