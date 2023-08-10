import { useState } from "react";
import { CustomButton, TextBox } from "../components/Component";
import {Link} from 'react-router-dom'


export default function Signup() {
  const [newDetails, setDetails] = useState({
    userName: "",
    email: "",
    password: "",
    Cpassword: "",
  });

  return (
    <div>
      <div>
        <TextBox
          Type="text"
          LabelData="Username"
          onChangeAction={(e) => {
            setDetails({ ...newDetails, userName: e.target.value });
          }}
          PlaceHolder="Username"
        />
        <TextBox
          Type="email"
          LabelData="Email"
          onChangeAction={(e) => {
            setDetails({ ...newDetails, email: e.target.value });
          }}
          PlaceHolder="Email"
        />
        <TextBox
          Type="password"
          LabelData="Password"
          onChangeAction={(e) => {
            setDetails({ ...newDetails, password: e.target.value });
          }}
          PlaceHolder="Password"
        />
        <TextBox
          Type="password"
          LabelData="Confirm Password"
          onChangeAction={(e) => {
            setDetails({ ...newDetails, Cpassword: e.target.value });
          }}
          PlaceHolder="Confirm Password"
        />

        <CustomButton buttonText="Signup" />
        <Link to="/Chatting">Chatting</Link>
      </div>
    </div>
  );
}
