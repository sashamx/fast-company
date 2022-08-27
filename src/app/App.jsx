import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./components/users";
import Main from "./layouts/main";
import Login from "./layouts/login";
import NavBar from "./components/navBar";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path={"/"} exact component={Main} />
                <Route path={"/login"} component={Login} />
                <Route path={"/users/:id?"} component={Users} />
            </Switch>
        </>
    );
}

export default App;
