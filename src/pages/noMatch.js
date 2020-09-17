
import React from 'react';
import bg from '../images/tft-bg.jpg';

const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url('${bg}')`,
    backgroundSize: '70%', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '250'
};

function NoMatch() {
    return (
        <div className="row text-center justify-content-center" style={bgStyle}>
            <div className="col-8">
                <br></br>
                <h1 className="text-center" style={{ color:"darkgoldenrod" }}>Error not found.</h1>
                <br></br>
                <h4 className="text-center" style={{ color:"darkgoldenrod" }}>
                    Seems that page doesn't exist.
                </h4>

                <br></br>
            </div>
        </div> 
    );
}
  
export default NoMatch;
  