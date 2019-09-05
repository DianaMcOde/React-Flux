import React from "react";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>React with Flux</h1>
      <p>This is the Homepage</p>
      <Link to="/about" className="btn btn-primary">About</Link>
    </div>   
  )
}

export default HomePage;
