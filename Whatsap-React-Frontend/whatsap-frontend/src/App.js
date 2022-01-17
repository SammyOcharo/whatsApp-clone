import React from "react";
import './App.css';
import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar/Sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
function App() {
    return (
        <div className="App">
            <div className="app_body">
                <Router>
                    <Routes>
                        <Route path="/app">
                            <Sidebar />
                            <Chat />
                        </Route>
                        <Route exact path="/">
                            <h1>Home</h1>
                        </Route>

                    </Routes>

                </Router>
            </div>
        </div>
    );
}

export default App;