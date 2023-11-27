import React, {useState, useEffect} from 'react';
import "./css/Card.css"
import CircleIcon from '@mui/icons-material/Circle';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { TruncatedText } from './helper';
import Avatar from 'react-avatar';
import { useMyContext } from './MyContext';

function Card({ticket}) {
    const { groupedUsers } = useMyContext();
    console.log("sdvjn",groupedUsers[ticket?.userId].name);
    return (
        <div className='Card'>
            <div className='sec-1'>
                <h4 className='id'>{ticket.id}</h4>
                <div className='profile-container'><Avatar name={ groupedUsers[ticket?.userId].name || "A" } size='20' textSizeRatio={2} /></div>
            </div>
            <TruncatedText text={ticket.title} maxLength={70} />
            <div className='sec-2'>
                <div className='icon'> <PriorityHighIcon className='priority-icon' /> </div>
                <div className='tags'>
                    {ticket?.tag?.map((t, idx)=><div key={idx} className='tag-container'><CircleIcon className='tag-icon' /><span className='tag'>{t}</span></div>)}
                </div>
            </div>
        </div>
    );
}

export default Card;