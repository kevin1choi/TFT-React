
import React, {useState} from 'react';

const infoStyle = {
    left: 0,
    bottom: 60,
    zIndex: 10,
    width: 250,
    color:"darkgoldenrod"
}

function Thumbnail(props) {
    const [infoState, setInfoState] = useState(true);

    function handleClick() {
        props.onThumbnailClick(props.item);
    }

    return (
        <div className="position-relative float-left" style={{ height: 60, width: 55 }}>
            { infoState 
                ? <div className="position-absolute"/>
                : <div className="card position-absolute bg-dark" style={infoStyle}>
                    <p className="mt-sm-3 mb-sm-2">{props.item.name}</p>
                    <p className="mt-sm-0">{props.item.description}</p>
                    { props.item.sets
                        ? <ul className="text-left mx-sm-1">
                            {props.item.sets.map(set => <li>Set {set.min} - {set.effect}</li>)}
                        </ul>
                        : <span/>
                    }
                </div>
            }
            <img className={props.className}
                src={props.item.src}
                onClick={handleClick}
                style={{ height: props.height }}
                onMouseEnter={() => setInfoState(false)}
                onMouseLeave={() => setInfoState(true)}/>
        </div>
    );
}
  
export default Thumbnail;
  