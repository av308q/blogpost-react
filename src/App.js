import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import BlogList from "./components/blogList";
import BlogPost from "./components/blogPost";

function App() {
    return (
        <Router>
            <Route path="/" exact component={BlogList} />
            <Route path="/post/:post_id?" component={BlogPost} />
        </Router>
    );
}

export default App;
