import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import {ProductProvider} from './context';


ReactDOM.render(
    <ProductProvider>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </ProductProvider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
