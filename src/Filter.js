import React, { useState } from 'react'
import './Filter.css'

function Filter({ parentCallback }) {
    const [value,setValue] = useState();
    const [checkedValue, setCheckedValue] = useState([]);

    const handleChanged =(event) => {
        const target = event.target;
        const name = target.name;
        setCheckedValue([name])
        // parentCallback([name])
        if(target.checked){
     setCheckedValue([...checkedValue,name])
    //  parentCallback([...checkedValue,name]);
        }else { 
           setCheckedValue(checkedValue.filter(value => value!== name ))
        //    parentCallback([checkedValue])
        } 
        parentCallback([checkedValue])
    }
    return (
        <div>
            {console.log(checkedValue)}
            <div className="filter">
            <div className="vertical__filters__filters">
            <h4 className="Filter__heading">FILTERS </h4>
            <br></br>
            <div className="price">
            <ul>
            <li>
            <label>
            <input 
            type="checkbox" 
            onChange={handleChanged}
            checked={value}
             name="10,000"></input>
            10,0000
            </label>
            </li>
            <li>
            <label>
            <input type="checkbox"
            onChange={handleChanged}
            checked={value}
             name="20,000"
            ></input>
            20,0000
            </label>
            </li>
            <li>
            <label>
            <input type="checkbox"
            onChange={handleChanged}
            checked={value}
             name="30,000"
            ></input>
            30,0000
            </label>
            </li>
            </ul>
            </div>
           { parentCallback([checkedValue])}

            </div>
           
            </div>
        </div>
    )
}

export default Filter
