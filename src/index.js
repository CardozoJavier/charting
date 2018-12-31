// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// // import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
// import store from './store/store.js';
// import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render(
// 	<Provider store= { store } >
// 		<BrowserRouter>
// 			<App /> 
// 		</BrowserRouter>
// 	</Provider>,
// 	document.getElementById('root')
// );

// // serviceWorker.unregister();

import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx'    
import { BrowserRouter, Route } from 'react-router-dom'    
import {Provider} from 'react-redux'
import store from './store/store'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);