
import React, { useState, useEffect } from 'react';

import Thumbnail from "../components/Thumbnail/Thumbnail";

import Champions from "../data/champions.js";
import Origins from "../data/origins.js";
import Traits from "../data/traits.js";
import ChampionCard from "../components/ChampionCard/championCard";

function ChampionsPage() {
    const [championListState, setChampionListState] = useState([]);
    // useEffect(() => {
    //     console.log("Champions loaded.");
    // }, []);

    const [filterState, setFilterState] = useState({
        origin: Origins[Origins.length - 1],
        trait: Traits[Traits.length - 1]
    });
    useEffect(() => {
        loadChampions(filterState.origin.name, filterState.trait.name);
    }, [filterState]);

    function loadChampions(origin, trait) {
        var filteredChampions = [];
        if (origin === "None" && trait === "None") {
            filteredChampions = Champions;
        } else if (origin !== "None" && trait === "None") {
            filteredChampions = Champions.filter(champion => champion.traits.includes(origin));
        } else if (origin === "None" && trait !== "None") {
            filteredChampions = Champions.filter(champion => champion.traits.includes(trait));
        } else if (origin !== "None" && trait !== "None") {
            filteredChampions = Champions.filter(champion => champion.traits.includes(origin) && champion.traits.includes(trait));
        }

        setChampionListState(filteredChampions);
    };

    function onThumbnailClick(item) {
        setFilterState({...filterState, [item.type]: item });
    }

    return (
        <div className="row text-center">
            <div className="col-3 pl-sm-4">
                <div className="row mb-sm-2">
                    <div className="col-12">
                        {
                            Origins.map(origin => <Thumbnail key={origin.key} item={origin} onThumbnailClick={onThumbnailClick} height={50}/>)
                        }
                    </div>
                </div>

                <div className="row mb-sm-5">
                    <div className="col-12">
                        <Thumbnail item={filterState.origin} onThumbnailClick={() => {}} height={75}/>
                        <br/>
                        <h5 className="" style={{ color:"darkgoldenrod" }}>{ filterState.origin.name}</h5>
                    </div>
                </div>

                <div className="row mb-sm-2">
                    <div className="col-12">
                        {
                            Traits.map(trait => <Thumbnail key={trait.key} item={trait} onThumbnailClick={onThumbnailClick} height={50}/>)
                        }
                    </div>
                </div>

                <div className="row mb-sm-5">
                    <div className="col-12">
                        <Thumbnail item={filterState.trait} onThumbnailClick={() => {}} height={75}/>
                        <br/>
                        <h5 className="" style={{ color:"darkgoldenrod" }}>{filterState.trait.name}</h5>
                    </div>
                </div>
            </div>

            <div className="col-9">
                <div className="row">
                    {championListState.length > 0 
                        ? championListState.map(champion => <ChampionCard key={champion.championId} champion={champion}/>)
                        : <h2 className="col-11" style={{ color:"darkgoldenrod" }}>No such Champions</h2>
                    }
                </div>
            </div>

        </div> 
    );
}
  
export default ChampionsPage;
  