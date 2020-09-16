import React from 'react'
import './Filter.css'

function Filter() {
    return (
        <div>
            
            <div className="filter">
            <div className="vertical__filters__filters">
            <h4 className="Filter__heading">FILTERS </h4>
            <br></br>
            <div className="price">
            <ul>
            <li>
            <label className="ddd" >
            <input type="checkbox"></input>
            10,0000
            </label>
            </li>
            <li>
            <label className="ddd" >
            <input type="checkbox"></input>
            20,0000
            </label>
            </li>
            <li>
            <label className="ddd" >
            <input type="checkbox"></input>
            30,0000
            </label>
            </li>
            </ul>
            </div>
            

            </div>
           
            </div>
        </div>
    )
}

export default Filter
