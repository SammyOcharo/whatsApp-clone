import { Avatar } from '@material-ui/core'
import React from 'react'
import db from '../Sidebar/firebase.config';
import './SidebarChat.css'

function SidebarChat({ AddNewChat, id, name }) {

    const createNewChat = () => {
        const roomname = prompt("Please enter name for chat ");
        if (roomname) {
            //adds a new chat to the  database
            db.collection('rooms').add({
                name: roomname
            })
        };
    };

    const openChat = () => {
        //once the sidechat it slicked it opens the chat 
        console.log("You are going into a chat")
    };

    return !AddNewChat ? (
        <div className='sidebarChat' onClick={openChat}>
            <Avatar />
            <div className="sidebarchat__info">
                <h2>{name}</h2>
                <p>Last message</p>
            </div>
        </div>
    ) : (
        <div onClick={createNewChat} className='sidebarChat'>
            <div className="sidebarchat__info">
                <h2>Add New chat</h2>
            </div>
        </div>
    )
}

export default SidebarChat
