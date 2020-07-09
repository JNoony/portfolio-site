import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// import NotFound from './NotFound';
import Main from './page/Main';

export default function App(){
    return(<>
       <Switch>
            <Route path="/" exact component={Main} />
            {/* <Route path="/sub" component={sub}/>  */}

            {/* <Route component={NotFound} /> */}
        </Switch>
    </>)
}