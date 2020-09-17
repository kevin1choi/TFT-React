
import React from 'react';

import Thumbnail from "../Thumbnail/Thumbnail";

const listItemStyle = {
    backgroundColor: `rgba(0, 0, 0, 0)`,
    color:"darkgoldenrod",
    borderColor: "darkgoldenrod"
};

function ItemList(props) {
    return (
        <ul class="list-group w-100 list-group-flush">
            {
                props.items.map(items =>
                    <li class="list-group-item" style={ listItemStyle }>
                        <div className="row">
                            <div className="col-1 pt-sm-1">
                                <Thumbnail item={items.core1} style={{ height: 60 }}/> 
                            </div>
                            <h3 className="col-1 pt-sm-2">+</h3>
                            <div className="col-1 pt-sm-1">
                                <Thumbnail item={items.core2} style={{ height: 60 }}/> 
                            </div>
                            <h3 className="col-1 pt-sm-2">=</h3>
                            <div className="col-1">
                                <Thumbnail item={items.item} style={{ height: 60 }}/> 
                            </div>
                            <div className="col-7">
                                <p>
                                    {items.item.description}
                                </p>
                            </div>
                        </div>
                    </li>   
                )
            }
        </ul>
    );
}
  
export default ItemList;
  