import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Tick(){
    return   <h2>It is {new Date().toLocaleTimeString()}.</h2>
  }

  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  };

  // function Clock(props) {
  //   return (
  //     <div>
  //       <h1>Hello, world!</h1>
  //       <h2>It is {props.date.toLocaleTimeString()}.</h2>
  //     </div>
  //   );
  // }
  
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }


  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock date={new Date()} />
       
      </header>
      <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
      <Comment
       date={comment.date}
       text={comment.text}
       author={comment.author}
     />
    
    </div> 


  );
  
  
}



export default App;


