import './App.css';
import React, { useEffect, useState } from 'react'
import { FormControl, Input, FormHelperText } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import logomess from './logomess.jpg';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //run once when the app component loads

    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please Enter your name'));
  }, [])

  const sendMessage = (e) => {
    // all the logic to send a message goes here
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <h1>MESSENGER APP</h1>
      <h2>Welcome {username}  </h2>
      <img src={logomess} alt="logo" />
      <form className="app__form">
        <FormControl className="app_formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={e => setInput(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
          <IconButton className="app__iconButton" disabled={!input} color="primary" variant="contained" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>


      </form>
      <FlipMove className="app__flipMove">
        {
          messages.map(({ id, message }) => (
            <Message className="app__messages" key={id} mess={message} username={username} />
          ))
        }
      </FlipMove>
    </div>
  )
}

export default App

