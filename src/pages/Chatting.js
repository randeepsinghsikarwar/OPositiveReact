import { useEffect, useState } from "react";
import { CustomButton, TextBox, RenderList } from "../components/Component";

export default function Chatting(){

    const[data, setData] = useState({
        chattingBox : "Say Hello!",
        messageBox: ["hello", "world"],
        })

    return(
        <div id="chattingParent">
            <div id = "messageBox">
               <RenderList
               list = {data.messageBox}
               />
            </div>
            <TextBox
            Placeholder = "say hello!"  
            inputId = "chattingBox"
            // onChangeAction = {(e) => {
            //     setData({...data, chattingBox:e.target.value})
            // }}
            Type = "text"
            
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
                setData({...data, messageBox: data.messageBox + data.chattingBox })
            }}
            buttonText = "Send"
            />
        </div>
    )
}