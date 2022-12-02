import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../apis/auth.api";
import logo from "../assets/png/logo.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginSvg from "../assets/svg/LoginSvg";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const visiblePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    await AuthAPI.signin({ email, password })
      .then((result) => {
        alert("Berhasil Login")
        Cookies.set("auth", true)
        Cookies.set("token", result.data.data.token)
        result.data.data.isAdmin && navigate("/dashboard")
      })
      .catch(() => {
        alert("password or email is wrong");
      });
  };

  useEffect(()=>{ 

  }, [])

  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="my-auto flex justify-center py-4 items-center">
        <div className="flex flex-col justify-center gap-5 border-r-2 pr-16">
          <img src={logo} alt="" width={52} />
          <h1>Sign in as Admin</h1>
          <p>Not admins? open apps in <span className="text-secondary cursor-pointer">here</span></p>
          <form
            onSubmit={handleSubmit}
            className="form-container w-[20vw] flex flex-col gap-5"
          >
            <div className="form-group flex flex-col w-[20vw]">
              <label htmlFor="email">Email</label>
              <input
                className="border rounded-default p-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group flex flex-col w-[20vw] relative">
              <label htmlFor="password">Password</label>
              <input
                className="border rounded-default p-2"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              <span className="pt-2 text-end text-sm text-secondary cursor-pointer">Forget password?</span>
              <span
                onClick={visiblePassword}
                className="z-20 absolute top-[32px] right-[10px] cursor-pointer"
              >
                <VisibilityOffIcon />
              </span>
            </div>
            <button
              className="bg-secondary rounded-default text-white w-full py-2"
              type="submit"
              data-testid="button-submit"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-secondary pt-16">
            DiscussIn. All right reserved.
          </p>
        </div>
        <div className="mt-10 w-1/2 flex">
          <LoginSvg />
        </div>
      </div>
    </div>
  );
};

export default Login;
