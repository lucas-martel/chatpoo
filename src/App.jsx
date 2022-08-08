import './App.css';
import Menu from './components/Menu';
import UserInput from './components/UserInput';
import ChatArea from './components/ChatArea';
import { useState } from 'react';

const criaMenssagem = (owner, message) => {
  return {dono: owner, msg: message}
}

const getMessages = (chave) => {
  const dado = localStorage.getItem(chave);
  if(!dado){
      var menssagens = [criaMenssagem('p', "Ola tudo bem, é seu primeiro acesso, qual o seu nome? ")]
      saveMessage(menssagens, chave)
      return localStorage.getItem(chave);
  }
  return JSON.parse(dado)
}

const saveMessage =(vetor, chave) => {
  localStorage.setItem(chave, JSON.stringify(vetor));
}

function App() {
  const chave = "chat"
  const [msgs, setMsgs] = useState(getMessages(chave))
 
  const setNewMsg = (dono, msg) => {
    const novaMsgs = [criaMenssagem(dono, msg), ...msgs]
    saveMessage(novaMsgs, 'chat')
    setMsgs(novaMsgs)
  }
  return (
    <div className="App">
        <div id='chat-container'>
          <div id='menu-area'><Menu /></div>
          <div id='chat-area'><ChatArea msgs={msgs}/></div>
          <div id='input-area'><UserInput setNewMsg={setNewMsg}/></div>
        </div>
    </div>
  );
}

export default App;
