import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ingredientReducer from './store/reducers/ingredientReducer'
import errorReducer from './store/reducers/errorReducer'
import priceReducer from './store/reducers/priceReducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const rootReducer = combineReducers({
    priceReducer: priceReducer,
    ingredientReducer: ingredientReducer,
    errorReducer: errorReducer
})

// Came from https://github.com/zalmoxisus/redux-devtools-extension
const compseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, compseEnhancers(applyMiddleware(thunk)))

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
