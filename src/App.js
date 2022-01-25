// import logo from './logo.svg';
// import './App.css';

import Calculator from "./components/Calculator";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// --> rcc
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     name: 'Hello World'
//   }
//   render() {
//     return (
//       <div>
//         <h2>{this.state.name}</h2>
//       </div>
//     )
//   }
// }


// --> rafce
// import React,{useState} from 'react'

// export const App = () => {
//   const [name, setName] = useState('Hello World!')
//   return (
//     <div>
//       <h2>{name}</h2>
//     </div>
//   )
// }

// export default App


// props with state
// import React, { Component } from 'react'
// import Display from './Display'

// export default class App extends Component {
//   state = {
//     name : 'React Js'
//   }
//   render() {
//     return (
//       <div>
//         <Display name = {this.state.name} />
//       </div>
//     )
//   }
// }


// import React,{useState} from 'react'
// import './App.css'

// const App = () => {
//   const styling = {backgroundColor:'blue', color:'#fff'}
//   const [name, setName] = useState("Reddy")
//   return (
//     <div>
//       <h1 style={styling}>Welcome to</h1>
//       <h2>Hello World!</h2>
//       <button onClick={() => console.log('Clicked')}>Click</button>
//      <div>
//      {name}
//       <button onClick={()=> setName("Reddamma")}>Change Name</button>
//      </div>
//     </div>
//   )
// }

// export default App

// import React,{useState} from 'react'

// const App = () => {
//   const [count, setCount] = useState(0) 
//   return (
//     <center>
//       <div>
//       <h2>{count}</h2>
//       <button onClick={()=> setCount(count + 1)}>Click</button>
//     </div>
//     </center>
//   )
// }

// export default App



// useEffect
// import React,{useState,useEffect} from 'react'
// function App() {
//   const [count, setCount] = useState(0) 
//   useEffect(()=> console.log('clicked'),[count])
//   return (
//     <center>
//       <div>
//       <h2>{count}</h2>
//       <button onClick={()=> setCount(count + 1)}>Click</button>
//     </div>
//     </center>
//   )
// }

// export default App


// onchange
// import React,{useState} from 'react'

// const App = () => {
//   const [user,setUser] = useState("");
//   const handler = e => {
//     setUser(e.target.value)
//   }
//   return (
//     <div>
//       <input type="text" placeholder='Username' value={user} name="user" onChange={handler} />
//       {user}
//     </div>
//   )
// }

// export default App


// import React,{useState} from 'react'

// function App() {
//   const [data, setData] = useState({
//     username:'',
//     password:''
//   })
//   const {username, password} = data;
//   const onChange = e => {
//     setData({...data,[e.target.name]: [e.target.value]})
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     console.log(data);
//   }
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input type="text" name="username" value={username} onChange={onChange} placeholder='Username' />
//         <input type="password" name="password" value={password} onChange={onChange} placeholder='Password' />
//         <input type="submit" value="submit" name="submit" />
//       </form>
      
//     </div>
//   )
// }

// export default App


// map
// import React from 'react'

// function App() {
//   const arr = ['Angular Js','Node Js','React Js','Vue Js'];
//   const array = [
//     {
//       id:1,
//       name:"React"
//     },
//     {
//       id:2,
//       name:"Angular"
//     },
//     {
//       id:3,
//       name:"Vue"
//     }
//   ]
//   return (
//       <div>
//        {
//         arr.map((value,index) => <li key={index}>{index}-{value}</li>)
//       }
//       {
//         array.map((value,index) => <li>{value.id}-{value.name}</li>)
//       }
//       </div>
//   )
// }

// export default App


// filter
// import React from 'react'

// function App() {
//   const names = ['james','john','petter','advin','adoe','jacksan'];
//   const filtered = names.filter(name => name.includes('j'));
//   const numbers = [10,20,30,40,50,60,70,80];
//   const filternumbers = numbers.filter(item => item>40);
//   return (
//     <div>
//       {
//         filtered.map(item => <li>{item}</li>)
//       }
//       {
//         filternumbers.map(item => <li>{item}</li>)
//       }
//     </div>
//   )
// }

// export default App


// export default and export
// import React from 'react'
// import Header from './components/Header'
// import Home from './components/Home'
// import {Footer} from './components/Footer'

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   )
// }

// export default App


// Login
// import React,{useState} from 'react'

// const App = () => {
//   const [data, setData] = useState({
//     username:'',
//     password: ''
//   })
//   const {username,password} = data;
//   const changeHandler = e => {
//     var l = setData({...data,[e.target.name]:[e.target.value]});
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     console.log(data);
//   }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//           <input type="text" name="username" value={username} onChange={changeHandler}/> <br/>
//           <input type="password" name="password" value={password} onChange={changeHandler}/> <br/>
//           <input type="submit" value="Submit" />
//         </form>
//       </center>
//     </div>
//   )
// }

// export default App


// Signup with validation
// import React,{useState} from 'react'
// import Signup from "./components/Signup";

// const App = () => {
//   return (
//     <Signup></Signup>
//   )
// }

// export default App


// Calculator
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Calculator></Calculator>
//     </div>
//   )
// }

// export default App


// fetch API
// import React from 'react'
// import Fetch from "./components/Fetch";

// const App = () => {
//   return (
//     <div>
//       <Fetch></Fetch>
//     </div>
//   )
// }

// export default App


// Axios API - install axios
// import React from 'react'
// import Axios from "./components/Axios";

// const App = () => {
//   return (
//     <div>
//       <Axios></Axios>
//     </div>
//   )
// }

// export default App


// Signup with Firebase
// import React,{useState} from 'react'
// import Firebase from "./components/Firebase";

// const App = () => {
//   return (
//     <Firebase></Firebase>
//   )
// }

// export default App


// React Router, Redirect and useHistory Hook
import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Home from "./components/Home";
import Image from "./components/Image";
import './App.css'

const App = () => {
  return <div>
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/image" exact component={Image} />
      {/* for params */}
      <Route path="/dashboard/:name" exact component={Dashboard} />
    </Switch>
    </BrowserRouter>
  </div>;
};

export default App;





















