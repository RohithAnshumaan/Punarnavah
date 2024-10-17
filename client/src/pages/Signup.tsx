import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { TextLink } from "../components/TextLink";
import { useState } from "react";
import axios from "axios";
import { SignupInput } from "../utils/schema";
import { backendUrl } from "../utils/config";

export const Signup = () => {
  const [signupData, setSignupData] = useState<SignupInput>({
    username: "",
    email: "",
    password: "",
    cPassword: ""
  })
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      console.log(signupData);
      const response = await axios.post(`${backendUrl}/api/v1/auth/signup`, { 
        
        username: signupData.username,
        email: signupData.email,
        password: signupData.password,
        cPassword: signupData.cPassword
       });
      alert(response.data.msg);
      if (response.data.msg === "User created Successfully") {
        navigate('/signin');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border bg-white p-8 rounded-xl shadow-xl text-center">
        <Heading text={"Signup"} />
        <SubHeading text={"Enter your details to create an account"} />
        <InputBox
          type="text"
          label="Username"
          onChange={(e) => {
            setSignupData({
              ...signupData,
              username: e.target.value
            });
          } } placeholder={""} name={""}        />
        <InputBox
          type="email"
          label="Email"
          onChange={(e) => {
            setSignupData({
              ...signupData,
              email: e.target.value
            });
          } } placeholder={""} name={""}        />
        <InputBox
          type="password"
          label="Password"
          onChange={(e) => {
            setSignupData({
              ...signupData,
              password: e.target.value
            });
          } } placeholder={""} name={""}        />
        <InputBox
          type="password"
          label="Confirm Password"
          onChange={(e) => {
            setSignupData({
              ...signupData,
              cPassword: e.target.value
            });
          } } placeholder={""} name={""}        />
        <Button text="Submit" onClick={handleSubmit} />
        <div className="flex justify-end">
          <TextLink text="Already have an account?" linkTo="/signin" />
        </div>
      </div>
    </div>
  );
};