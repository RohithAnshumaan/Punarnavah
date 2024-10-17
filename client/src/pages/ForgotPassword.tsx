import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import axios from "axios";
import { ForgotPasswordInput } from "../utils/schema"
import { backendUrl } from "../utils/config";

export const ForgotPassword = () => {
  const [forgotPasswordData, setForgotPasswordData] = useState<ForgotPasswordInput>({
    email: ""
  })

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/v1/auth/forgot-password`, { 
        email: forgotPasswordData.email
      });
      alert(response.data.msg);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border bg-white p-8 rounded-xl shadow-xl text-center">
        <Heading text={"Forgot Password"} />
        
        <InputBox
          type="email"
          label="Email"
          onChange={(e) => {
            setForgotPasswordData({
              ...forgotPasswordData,
              email: e.target.value
            });
          } } placeholder={""} name={""}        />

        <Button text="Submit" onClick={handleSubmit} />
        
      </div>
    </div>
  );
};