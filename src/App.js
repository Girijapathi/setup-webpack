import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(()=>{
    return import('./containers/Pizza');
});

class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/Pizza">Pizza</Link>
                </div>
                 <div>
                     <Route path="/" exact component={Users}></Route>
                     <Route pathh="/pizza" component={AsyncPizza}/>
                 </div>
            </div>
        )
    }
}