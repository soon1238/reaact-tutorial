import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function formatDate(date) {
    return date.toLocaleDateString();
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

  // function FormattedDate(props) {
  //   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
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

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

  class LoggingButton extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={(e) => this.handleClick(e)}>
          Click me
        </button>
      );
    }
  }

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClickbutton.bind(this);
      this.handleLogoutClick = this.handleLogoutClickbutton.bind(this);
      this.state = {isLoggedIn: false};
    }
  

    handleLoginClickbutton() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClickbutton() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      // let button;
  
      // if (isLoggedIn) {
      //   button = <LogoutButton onClick={this.handleLogoutClick} />;
      // } else {
      //   button = <LoginButton onClick={this.handleLoginClick} />;
      // }
  
      return (
        // <div>
        //   <Greeting isLoggedIn={isLoggedIn} />
        //   {button}
        // </div>
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
     
    </div>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <LoginControl />
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
        <Clock />
        <Clock />
       
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
    <Toggle />
    <LoggingButton />
    </div> 


  );
  
  
}



export default App;


