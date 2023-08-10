import { useEffect, useState } from "react";
import { CustomButton, TextBox, RenderList } from "../components/Component";



export default function Chatting(){

    const[messages, setMessages] = useState([]);
    const [ chatbox, setChatbox] = useState();


    return(
        <div id="chattingParent">
            <div id = "messageBox">
               <RenderList
               list = {messages}
               />
            </div>
            <div id="chatting_lower">
            <TextBox
            id = "a"
            Placeholder = "say hello!"  
            inputId = "chattingBox"
            Type = "text"
            Value = {chatbox}
            onChangeAction = {(e) => {
                    setChatbox(e.target.value);
            }}
            
            />
            <CustomButton
            parentId = "skipButton"
            // onClickAction = {}
            buttonText = "Skip"
            />
            <CustomButton
            parentId = "stopButton"
            // onClickAction = {}
            buttonText = "Stop"
            />
            <CustomButton
            parentId = "sendButton"
            onClickAction = {(e) =>{
                setMessages([...messages, chatbox])
                setChatbox('')
            }}
            buttonText = "Send"
            />
            </div>
        </div>
    )
}