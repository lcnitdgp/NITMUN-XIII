import React from 'react';
import './Cards.scss';

function Cards(props) {
    return (
  <div className="card-container">    
    
<div className="card-wrapper">
      
      <div className="cardie">
        
        <div className="card-image profile-img--two">
          <img src={props.backgroundImage} alt="profile two" />
        </div>

        <ul className="social-icons">

        {props.facebookLink && (
        <li>
        <a href={props.facebookLink}>
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        )}

        {props.instagramLink && (
        <li>
        <a href={props.instagramLink}>
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        )}
      </ul>

      <div className="details">
        <h2>{props.name}
          <br/>
          <span className="job-title">{props.jobTitle}</span>
        </h2>
      </div>
    </div>
 </div >
     
 </div> 
    );
}

export default Cards;