
import React from 'react';

import galaxies from '../data/galaxies.js';
import GalaxyCard from "../components/GalaxyCard/galaxyCard";

function Galaxies(props) {
    return (
        <div className="row text-center justify-content-center" style={{ color:"darkgoldenrod" }}>
            <div className="col-10">
                <div className="row">
                    {
                        galaxies.map(galaxy => <GalaxyCard name={galaxy.name} src={galaxy.src} description={galaxy.description}/>)
                    }
                </div>
            </div>
        </div>
   );
}

export default Galaxies;