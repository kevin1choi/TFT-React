
import React from 'react';

function NavBtn(props) {
    return (
        <div className="col-4 mb-sm-5">
            <h5>{props.name}</h5>
            <img src={props.src} style={{ height: 100 }}/>
            <p>
                {props.description}
            </p>
        </div>
   );
}

export default NavBtn;