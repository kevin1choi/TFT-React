
import React, {useState} from 'react';

function ChampionCard(props) {
    const bgStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.725) 0%,rgba(0,0,0,0.725) 100%), url('${props.champion.src}')`,
        backgroundSize: '86.75%', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '450',
    };

    const [cardState, setCardState] = useState(true);

    function championInfo() {
        if (cardState) {
            setCardState(false);
        } else {
            setCardState(true);
        }
    }

    return (
        <div className="col-4" onClick={championInfo}>
            {cardState
                ? <img src={props.champion.src} style={{ height: 450 }}/>
                : <div style={ bgStyle }>
                    <div style={{ height: 450, color:"darkgoldenrod" }}>
                        <br/><br/>
                        <h5>{ `${props.champion.traits[0]} ${props.champion.traits[1]}` }</h5>
                        <br/><br/>
                        <p className="mx-sm-4">{ props.champion.description }</p>
                        <br/><br/>
                        <p>{ `Cost: ${props.champion.cost}g` }</p>
                    </div>
                </div>
            }
            <h5 className="" style={{ color:"darkgoldenrod" }}>{props.champion.name}</h5>
        </div>
   );
}

export default ChampionCard;