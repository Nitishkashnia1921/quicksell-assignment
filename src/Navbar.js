import React, { useState, useEffect } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import "./css/Navbar.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useMyContext } from './MyContext';

function Navbar() {
    const { isOpen, setIsOpen, loading, grouping, ordering, setGrouping, setOrdering } = useMyContext();
    const selectGrouping = (event) => {
        localStorage.setItem("grouping",event.target.value);
        setGrouping(event.target.value);
    } 
    const selectOrdering = (event) => {
        localStorage.setItem("ordering",event.target.value);
        setOrdering(event.target.value);
    } 

    return (
        <div className='Navbar'>
            <div className='display-button' onClick={()=>setIsOpen(!isOpen)}>
                <TuneIcon className='tune-icon' />
                <p>Display</p>
                <ArrowDropDownIcon className='arrow-icon' />
            </div>
            {isOpen &&
                <div className='popup'>
                    <div className='popup-option-1'>
                        <span>Grouping</span>
                        <select onChange={selectGrouping} defaultValue={grouping || "Status"} className="grouping-options">
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div className='popup-option-2'>
                        <span>Ordering</span>
                        <select onChange={selectOrdering} defaultValue={ordering || "Priority"} className="ordering-options">
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            }
        </div>
    );
}

export default Navbar;