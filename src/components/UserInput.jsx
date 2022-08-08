import React from 'react';
import {BiSend} from 'react-icons/bi'
import './UserInput.css'

function handleInsertTextOnArea(e){
    e.preventDefault();
    
    let area = document.getElementById("input-text")
    area.style.height = 'auto';
    area.style.height = `${e.target.scrollHeight}px`;
    area.style.bottom = '20%';
}

function getText(){
    return document.getElementById('input-text').value
}


function UserInput({setNewMsg}) {
    return (
        <div className="user-input-container">
            <textarea 
                onInput={handleInsertTextOnArea} 
                id="input-text" 
                cols="30" 
                rows="1"
                placeholder='Pegunte ao POO'>
            </textarea>
            <BiSend id="send" onClick={()=>{setNewMsg('u', getText())}}/>
        </div>
    )
}

export default UserInput;