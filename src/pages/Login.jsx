import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../apis/auth.api";
import logo from "../assets/png/logo.svg";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LoginSvg from "../assets/svg/LoginSvg";
import { Helmet } from "react-helmet-async";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const validateInput = (e) => {
    setEmail(e.target.value);
    const regexpSqli =
      /\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b/g;
    const regexpHtml = /<(\/*?)(?!(em|p|br\s*\/|strong))\w+?.+?>/gim;

    if (regexpHtml.test(email)) {
      setEmail("");
      return { fieldName: email, errorMsg: "Memasukkan tag HTML dilarang!" };
    }
    if (regexpSqli.test(email)) {
      console.log("Memasukkan SQLi query dilarang!");
      return { fieldName: email, errorMsg: "Memasukkan SQLi query dilarang!" };
    }
    return { fieldName: email, errorMsg: "" };
  };

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
        if (!result.data.data.isAdmin) {
          console.log(result.data.data.password);
          alert("Anda bukan admin!");
        } else {
          alert("Berhasil Login");
          Cookies.set("token", result.data.data.token);
          Cookies.set("username", result.data.data.username);
          navigate("/dashboard");
        }
      })
      .catch(() => {
        alert("password or email is wrong");
      });
  };

  useEffect(() => {}, []);

  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta
          name="description"
          content="Discuss.In login for Dashboard admin"
        />
      </Helmet>
      <div className="container h-screen flex items-center justify-center">
        <div className="flex justify-center py-4 items-center flex-wrap-reverse">
          <div className="flex flex-col justify-center gap-5 border-r-2 border-gray pr-16">
            <img src={logo} alt="" width={52} />
            <h1>Sign in as Admin</h1>
            <p>
              Not admin? Open apps in{" "}
              <span className="text-navy cursor-pointer">here</span>
            </p>
            <form
              onSubmit={handleSubmit}
              className="form-container w-[20vw] flex flex-col gap-5"
            >
              <div className="form-group flex flex-col w-[20vw]">
                <label htmlFor="email">Email</label>
                <input
                  className="border border-gray active:border-navy rounded-default p-2"
                  onChange={validateInput}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group flex flex-col w-[20vw] relative">
                <label htmlFor="password">Password</label>
                <input
                  className="border border-gray active:border-navy rounded-default p-2"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  required
                />
                {showPassword ? (
                  <span
                    onClick={visiblePassword}
                    className="z-20 absolute top-[32px] right-[10px] cursor-pointer"
                  >
                    <VisibilityOffOutlinedIcon />
                  </span>
                ) : (
                  <span
                    onClick={visiblePassword}
                    className="z-20 absolute top-[32px] right-[10px] cursor-pointer"
                  >
                    <VisibilityOutlinedIcon />
                  </span>
                )}
              </div>
              <button
                className="bg-navy rounded-default text-white w-full py-2"
                type="submit"
                data-testid="button-submit"
              >
                Sign In
              </button>
            </form>
            <p className="text-sm text-[#C3CBCD] pt-20">
              © DiscussIn. All right reserved.
            </p>
          </div>
          <div className="mt-10 w-1/2 flex">
            <LoginSvg />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
