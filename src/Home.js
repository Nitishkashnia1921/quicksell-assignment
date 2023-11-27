import React, { useState, useEffect, useMemo } from 'react';
import "./css/Home.css"
import { useMyContext } from './MyContext';
import List from './List';
import Navbar from './Navbar';
import { getGroupedTickets, StringToMuiIcon, getGroupedUsers } from './helper';
// import { MoreHoriz, PriorityHigh, SignalCellular4Bar, SignalCellular0Bar, CheckCircle,  Cancel, Circle, ChangeCircle, RotateLeft, Person2 } from '@mui/icons-material';


function Home() {
    const { setIsOpen, grouping, orderingOptions, groupedTickets } = useMyContext();

    return (
        <div className='Home'>
            <Navbar />
            <div className='main-section' onClick={()=>setIsOpen(false)}>
                {orderingOptions[grouping].map((item, idx)=><List key={idx} 
                                                                listHeader={item} 
                                                                tickets={groupedTickets[item.value]}
                                                            />)}
            </div>
        </div>
    );
}

export default Home;