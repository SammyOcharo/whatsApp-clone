import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLargeRounded"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVertRounded"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import SidebarChat from '../SidebarChats/SidebarChat';
import db from './firebase.config';


function Sidebar({ id, name }) {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {

        const unsubscribe = db.collection('rooms').onSnapshot(snapshot =>
        (
            setRooms(snapshot.docs.map(doc =>
            ({
                id: doc.id,
                data: doc.data(),
            })))
        ));
        return () => {
            unsubscribe();
        }

    }, []);

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder='Search something' />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat AddNewChat />

                {
                    rooms.map((room) => (
                        <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                    ))
                }


            </div>
        </div>
    )
}

export default Sidebar
