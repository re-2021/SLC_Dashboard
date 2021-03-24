import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './dashboard/Dashboard';
import View from './dashboard/View';
import MyChart from './dashboard/Graph';

const Routes = () => {
    return(
        <div>
        <BrowserRouter>
           
            <Switch>
            <Route path="/" exact component={Dashboard} /> 
            <Route path="/view" exact component={View} /> 
            <Route path='/graphs' exact component={MyChart}/>
        
            </Switch>
        </BrowserRouter>
        </div>
    )
}
export default Routes; 