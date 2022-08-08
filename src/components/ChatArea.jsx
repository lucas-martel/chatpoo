import React from 'react';
import './ChatArea.css'

const ChatArea = ({msgs})=> {
    return (
    <div className="chat">
            {msgs.map( (msg, index) => (
                <p key={index} className={"msg-"+msg.dono}>{msg.msg}</p>
            ))}
    </div>)
}

export default ChatArea;