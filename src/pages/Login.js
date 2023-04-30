import { useState } from "react"
import { TextBox, CustomButton } from "../components/Component";
import {Link} from 'react-router-dom'

export default function Login(){

    const[details, setDetails ] = useState({
        email:  "",
        password:  ""
    });

    return(
        <div class = "parent">
            <div class = "leftPanel">
                
            </div>
            <div class = "rightPanel">

                <TextBox
                parentId = "emailPatent"
                Type = "email"
                inputId = "email"
                LabelData = "Email"
                onChangeAction = {(e) => {
                    setDetails({...details, email : e.target.value})
                }} 
                Placeholder = "Enter Email"
                />

                <TextBox 
                parentId = "passwordParent"
                type = "password"
                inputId = "password"
                LabelData = "Password"
                onChangeAction = {(e) => {
                    setDetails({...details, password: e.target.value})
                }}
                Placeholder = "Password"
                />

                <CustomButton
                parentId = "loginButton"
                buttonText = "Login"
                onClickAction = {() => {}}
                />
                <Link to = '/Chatting'>Chatting</Link>



            </div>
        </div>
    )
}