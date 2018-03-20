import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
// React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Store and redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import PostIndex from './components/post_index';
import PostsNew from './components/posts_new';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/" component={PostIndex} />
                </Switch>        
            </div>          
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
