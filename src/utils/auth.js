const auth = {
  isAuthorization() {
    if (localStorage.getItem("token") && localStorage.getItem("username")) return true;
  },
  signOut(navigate) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    alert("Berhasil log out");
    navigate("/login");
  },
};

export default auth;
