import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { TextField, Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = () => {
    let req = {
      username: email,
      password: password,
    };
    axios
      .post("https://untitled-twkmuar27a-uc.a.run.app/api/login/", req)
      .then(function (response) {
        let token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("authenticated", true);

        props.setToken(token);
        nav("/dashboard");
      })
      .catch(function (error) {
        return (
          <Alert severity="error" open={true}>
            Something went wrong, Please refresh and try again
          </Alert>
        );
      });
  };
  // email & password : testadmin
  return (
    <div className="bg-[#f4f4f4] p-12">
      <div className="bg-white p-12 rounded-[50px]">
        <img src={Logo} alt="" className="w-[135px]" />
        <div className="mt-16 lg:flex justify-between">
          <div className="lg:w-[35%]">
            <div className="text-[24px] font-[400]">STEP {step}</div>
            <p className="text-[48px] font-[500]">
              Enter your email address to continue
            </p>
            <p className="text-[24px] font-[400] mt-4">
              Log in to your account. If you don’t have one, you will be
              prompted to create one.
            </p>
          </div>
          <div className="lg:w-[55%]">
            {step === 1 ? (
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ width: "100%" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                sx={{ width: "100%" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}

            <div className="flex flex-row-reverse gap-4 mt-4">
              <div
                className="bg-black rounded-[10px] p-4 w-[227px] text-center cursor-pointer text-white"
                onClick={() => {
                  step === 1 ? setStep(2) : handleSubmit();
                }}
              >
                {step === 1 ? "Continue" : "Agree & Continue"}
              </div>
              {step === 2 && (
                <div>
                  Use a minimum of 6 characters (case sensitive) with at least
                  one number or special character.
                </div>
              )}
            </div>
          </div>
        </div>
        {step === 2 && (
          <div className="font-[300] mt-8">
            Dingoo will use your data to personalise and improve your Dingoo
            experience and to send you information about Dingoo. You can change
            your communication preferences anytime. We may use your data as
            described in our Privacy Policy, including sharing it with The Test
            of Companies. By clicking "Agree & Continue", you agree to
            our Subscriber Agreement and acknowledge that you have read
            our Privacy Policy and Collection Statement.
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
