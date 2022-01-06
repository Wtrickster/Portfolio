// Import React
import React from 'react';

// Create and export project card component
export default function Project(props) {
  return (
    <div className= "row">  
      <div className= "col-md-6">
        <img src={props.thumbnail} alt="" className="round" />
      </div>
      <div className= "col-md-6">
          <h2>{props.title}</h2>
        <br />
          <p>{props.description}
        <br /> 
          <a href={props.app}>Deployed Page</a> 
        <br />
          <a href={props.repo}>Github</a>
        </p>
      </div>
    </div>
  );
}