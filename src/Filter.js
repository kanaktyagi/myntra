import React, { useState } from 'react'
import './Css/Filter.css'

function Filter({ parentCallback }) {
    const [value,setValue] = useState();
    const [checkedValue, setCheckedValue] = useState([]);

    const handleChanged = (event) => {
        const target = event.target;
        const name = target.name;
        setCheckedValue([name])
         if(target.checked) {
            parentCallback([name])
           }
            else {
                parentCallback([50000]) 
             }
    }
    return (
        <div>
            <div className="filter">
            <div className="vertical_filters_filters">
            <h4 className="Filter__heading">FILTERS </h4>
            <br></br>
            <div className="price">
            <ul className="remove__bullet">
            <li>
            <label>
            <input 
            type="checkbox" 
            onChange={handleChanged}
            checked={value}
             name="10000"></input>
           Less than 10,0000
            </label>
            </li>
            <li>
            <label>
            <input type="checkbox"
            onChange={handleChanged}
            checked={value}
             name="20000"
            ></input>
           Less than 20,0000
            </label>
            </li>
            <li>
            <label>
            <input type="checkbox"
            onChange={handleChanged}
            checked={value}
             name="30000"
            ></input>
            Less than 30,0000
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