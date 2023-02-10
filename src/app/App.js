import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UserPage from "./layouts/userPage";
import Users from "./layouts/users";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route
                    exact
                    path="/users/:userId"
                    render={(props) => <UserPage {...props} />}
                />
                <Route exact path="/users" component={Users} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Main} />
            </Switch>
        </div>
    );
}

export default App;
