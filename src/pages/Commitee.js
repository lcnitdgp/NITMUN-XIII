import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import './Commitee.css';

const Commitees = (props,{ border = '0px solid #fff' }) => {

      return (
        <div className="about-section" id="aboutSection" style={{ border: border }}>
         <div className="about-content">
            <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>{props.number}</span>{"  "}{props.numbertext}</span>
            <Fade duration={700} top cascade><span className="pf-200 section-heading " style={{fontSize: '30px'}}>{ props.comname}</span></Fade>
            <Slide bottom>
              <p className="pf-200 about">
              {props.textone}
              </p>
              
              <p className="pf-200 about">
             {props.texttwo}
              </p>
            </Slide>
          </div>
          <div className="about-image">
            <img src={props.commimage} alt="Top view"/>
          </div>
        </div>
      )
    }
    
export default Commitees;
