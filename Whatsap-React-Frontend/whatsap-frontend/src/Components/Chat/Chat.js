import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import MoreVert from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic'
function Chat() {
    const [input, setInput] = useState("");

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
                    <h4>Room name</h4>
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
                <p className='chat__message'>
                    <span className='chat__sender'>Sammy</span>
                    Hey guys
                    <span className='chat__timestamp'>08.00 am</span>
                </p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>Hey guys</p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>Hey guys its sammy</p>
                <p className='chat__message'>Hey guys</p>
                <p className='chat__message'>Hey guys am chilling with the big boys Hey guys am chilling with the big boys</p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>I did checkin with them</p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>Hey guys</p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>I did checkin with them</p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>Hey guys</p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>I did checkin with them</p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>Hey guys</p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>I did checkin with them</p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>Hey guys</p>
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
