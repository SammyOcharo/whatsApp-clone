import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import MoreVert from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic'
import { useParams } from 'react-router';
import db from '../Sidebar/firebase.config';


function Chat() {
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot =>
            (
                setRoomName(snapshot.data().name)

            ));
            db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot =>
            (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ));

        }
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You have typed >>>>>', input)
        setInput("");
    };

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h4>{roomName}</h4>
                    <p>Last seen at ..</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${true && "chat__receiver"}`}>
                        <span className='chat__sender'>{message.name}</span>
                        {message.message}
                        <span className='chat__timestamp'>
                            {
                                new Date(message.timestamp?.toDate()).toUTCString()
                            }
                        </span>
                    </p>
                ))}

            </div>
            <div className="footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input value={input} type="text" placeholder='Type a message' onChange={e => {
                        setInput(e.target.value);
                    }} />
                    <button onClick={sendMessage}>Send a Message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Chat
