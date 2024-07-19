import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./reducers/store";
import { BrowserRouter } from "react-router-dom";
import {createBrowserHistory} from 'history';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<BrowserRouter history={history}>
    	<App />
    </BrowserRouter>
);


reportWebVitals();
