import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './app.css';
import {HomePage, CartPage} from '../pages';

const App = () => {
    return (
        <main role="main" className='container'>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </main>
    );
};

export default App;