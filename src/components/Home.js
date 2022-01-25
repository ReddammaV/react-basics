import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';

const Home = () => {
  const [auth, setAuth] = useState(false);
  if(auth){
    return <Redirect to="/dashboard" />
  }
  return (
    <center>
      <div>
      <h2>Welcome to Home</h2>
      <button onClick={()=>setAuth(true)}>Login</button>
    </div>
    </center>
  )
}

export default Home
