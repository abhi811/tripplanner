import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import './views/css/styles.css';

import App from './components/App';
import store from './store/index';
import Login from './components/Login';
import Home from './components/Home';

function AppWithStore() {
    return(
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

ReactDOM.render(
    <AppWithStore />,
    document.getElementById("root")
);