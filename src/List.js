import React, {useState, useEffect} from 'react';
import "./css/List.css"
import Card from './Card';
import { StringToMuiIcon } from './helper';
import { useMyContext } from './MyContext';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Avatar from 'react-avatar';


function List({tickets, listHeader}) {
    const { grouping, groupedUsers } = useMyContext();
    return (
        <div className='List'>
            <div className='list-header'>
                { grouping==="user" ?
                    <Avatar name={ groupedUsers[listHeader?.value].name || "A" } size='20' round={true} textSizeRatio={2} /> :
                    <StringToMuiIcon iconName={listHeader.icon} style={listHeader.style} /> 
                }
                <span className='list-header-title'>
                    {
                        grouping==="user" ? groupedUsers[listHeader.value].name : listHeader.name
                    }
                </span>
                <span className='number-of-tickets'>{tickets?.length || 0 }</span>
                <div className='otherOptions'>
                    <AddOutlinedIcon fontSize='small' /> 
                    <MoreHorizOutlinedIcon fontSize='small' />
                </div>
            </div>
            {tickets?.map((ticket)=><Card key={ticket.id} ticket={ticket} />)}
        </div>
    );
}

export default List;