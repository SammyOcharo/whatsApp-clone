import React, { useState } from "react";
import './App.css';
import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar/Sidebar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {

    const [{ user }, dispatch] = useStateValue();

    return (

        <div className="App">
            {!user ? (
                <Login />
            ) : (
                <div className="app_body">
                    <Router>
                        <Sidebar />
                        <Switch>
                            <Route path="/rooms/:roomId">
                                <Chat />
                            </Route>
                            <Route path="/">

                            </Route>
                        </Switch>
                    </Router>
                </div>
            )}

        </div>
    );
}

export default App;