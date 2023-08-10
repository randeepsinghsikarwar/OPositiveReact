import { useEffect, useState } from "react";
import { TextBox, CustomButton } from "../components/Component";
import { Link } from "react-router-dom";

export default function Login() {
  const [meme, getMeme] = useState();

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const apiURL = "https://meme-api.com/gimme/1";

  async function memeData() {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
      getMeme(data.memes[0].url);
    } catch (error) {
      console.error("error while fetching meme : ", error);
    }
  }

  useEffect(() => {
    memeData();
  }, []);
  return (
    <div className="parent">
      <div className="mid">
        <div style={{ backgroundImage: `url(${meme}` }} className="leftPanel">
          <div className="innerLeft">
          <img className ="meme" src={meme} alt="a meme" />
          <button
            onClick={() => {
              memeData();
            }}
          >
            generate meme
          </button>
          </div>
        </div>
        <div className="rightPanel">
          <TextBox
            parentId="emailPatent"
            Type="email"
            inputId="email"
            LabelData="Email"
            onChangeAction={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
            Placeholder="Email"
          />

          <TextBox
            parentId="passwordParent"
            type="password"
            inputId="password"
            LabelData="Password"
            onChangeAction={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
            Placeholder="Password"
          />

          <CustomButton
            parentId="loginButton"
            buttonText="Login"
            onClickAction={() => {}}
          />
          <Link to="/Chatting">Chatting</Link>
        </div>
      </div>
    </div>
  );
}
