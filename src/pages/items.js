
import React, { useState, useEffect } from 'react';

import Thumbnail from "../components/Thumbnail/Thumbnail";
import ItemList from "../components/ItemList/itemList";

import CoreItems from "../data/coreItems.js";
import Items from "../data/items.js";

function ItemsPage(props) {
    const [itemListState, setItemListState] = useState([]);
    useEffect(() => {
        console.log("Items loaded.");
    }, []);

    const [itemState, setItemState] = useState(CoreItems[0]);
    useEffect(() => {
        var filteredItems = [];
        switch(itemState.type) {
            case "core":
                for (var i = 0; i < CoreItems.length; i++) {
                    filteredItems.push({
                        core1: itemState,
                        core2: CoreItems[i],
                        item: Items[itemState.creates[i]]
                    });
                }
                break;
            case "fused":
                filteredItems.push({
                    core1: CoreItems[itemState.needs[0]],
                    core2: CoreItems[itemState.needs[1]],
                    item: itemState
                });
                break;
            default:
                break;
        }

        setItemListState(filteredItems);
    }, [itemState]);

    function onThumbnailClick(item) {
        setItemState(item);  
    }

    return (
        <div className="row text-center">
            <div className="col-3 pl-sm-4">
                <div className="row mb-sm-4">
                    <div className="col-12">
                        {
                            CoreItems.map(item => <Thumbnail className="p-sm-1" onThumbnailClick={onThumbnailClick} item={item} height={50}/>)
                        }
                    </div>
                </div>

                <div className="row mb-sm-5">
                    <div className="col-12">
                        <Thumbnail item={itemState} onThumbnailClick={() => {}} height={75}/>
                        <br/>
                        <h5 className="" style={{ color:"darkgoldenrod" }}>{itemState.name}</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        {
                            Items.map(item => <Thumbnail className="p-sm-1" onThumbnailClick={onThumbnailClick} item={item} height={50}/>)
                        }
                    </div>
                </div>
            </div>

            <div className="col-9">
                <div className="row">
                    <div className="col-12">
                        {
                            <ItemList items={itemListState}/>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}
  
export default ItemsPage;
  