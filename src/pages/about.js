
import React from 'react';
import bg from '../images/tft-bg.jpg';

const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url('${bg}')`,
    backgroundSize: '70%', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '250'
};

function About() {
    return (
        <div className="row text-center justify-content-center" style={bgStyle}>
            <div className="col-8">
                <br></br>
                <h2 className="text-center" style={{ color:"darkgoldenrod" }}>Battle for Convergence</h2>
                <br></br>
                <p className="text-center" style={{ color:"darkgoldenrod" }}>
                    Teamfight Tactics is a round-based strategy game that pits you against seven opponents
                    in a free-for-all race to build a powerful team that fights on your behalf. Your goal:
                    Be the last person standing.
                </p>
                <p className="text-center" style={{ color:"darkgoldenrod" }}>
                    Draft, deploy, and dominate with a revolving roster of League of Legends champions in
                    a round-based battle for supremacy. Outsmart your opponents and adapt as you go—the strategy
                    is all up to you.
                </p>
                <p className="text-center" style={{ color:"darkgoldenrod" }}>
                    Cross-platform support means you can play with your friends (and crush your enemies)
                    across PC, Mac and mobile.
                </p>
                <p className="text-center" style={{ color:"darkgoldenrod" }}>
                    Express yourself with your Little Legend by dancing, emoting, and generally showing off.
                </p>

                <br></br>
            </div>
        </div> 
    );
}
  
export default About;
  
