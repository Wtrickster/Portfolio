// Import React
import React from 'react';

// Create and export project card component
export default function Project(props) {
  return (
    <div className= "row">  
      <div className="col-md-12">
        <div className="page-header">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className= "col-md-6">
        
        <img src={props.thumbnail} alt="Walkies" className="portfolio" />
      </div>
      <div className= "col-md-6">
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