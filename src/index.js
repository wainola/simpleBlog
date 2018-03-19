import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
// React Router
import { BrowserRouter, Route } from 'react-router-dom';
// Store and redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import PostIndex from './components/post_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={PostIndex}/>
            </div>          
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
