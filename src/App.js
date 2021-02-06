import './App.css';
import {useState} from 'react';

function App() {

  const [text, setText] = useState("Type something...");
  const [lines, setLines] = useState([]);

  const onSend = () => {
    setLines([...lines, text]);
    setText ("");
  }

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onKeyPress = (event) =>{
    if(event.which === 13){
      onSend();
    }
  }

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
       {
         lines.map  (x => {
          return <div className="App-chatroom-text">
          {x}
        </div>
         })
       }

      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onKeyPress={onKeyPress} onChange={onTextChange}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default App;
