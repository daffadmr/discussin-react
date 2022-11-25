import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthAPI from "../apis/auth.api";
import LoginImage from "../assets/png/loginImage.png";
import logo from "../assets/png/logo.svg";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)

  const visiblePassword = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    await AuthAPI.signin({ email, password })
      .then((result) => {
        console.log(result.data);
      })
      .catch(() => {
        alert("password or email is wrong");
      });
  };

  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center gap-5">
          <img src={logo} alt="" width={52} />
          <h1>Sign in as Admins</h1>
          <p>Not admins? open apps in here</p>
          <form onSubmit={handleSubmit} className="form-container w-[20vw] flex flex-col gap-5">
            <div className="form-group flex flex-col w-[20vw]">
              <label htmlFor="email">Email</label>
              <input className="border rounded-default p-2" type="email" name="email" id="email" placeholder="Enter Email" />
            </div>
            <div className="form-group flex flex-col w-[20vw] relative">
              <label htmlFor="password">Password</label>
              <input className="border rounded-default p-2" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter Password" />
              <button onClick={visiblePassword} className="z-20 absolute top-[32px] right-[10px]"><VisibilityOffIcon/></button>
            </div>
            <button className="bg-primary rounded-default text-white w-full py-2" type="submit" data-testid="button-submit">
              Sign In
            </button>
          </form>
          <p className="text-sm text-secondary">DiscussIn. All right reserved.</p>
        </div>
        <img
          src={LoginImage}
          alt=""
          className="h-screen w-[50vw]"
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default Login;
