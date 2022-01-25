import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <center>
      <div>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/dashboard"><li>Dashboard</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/image"><li>Image</li></Link>
        </ul>
      </div>
    </center>
  );
};

export default Navbar;
