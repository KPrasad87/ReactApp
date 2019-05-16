import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducer from './redux/sampleredux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootSaga from './redux/sagas';
import 'bootstrap/dist/css/bootstrap.min.css';

import Example from './reactselect/example2'
import Allreactstrap from  './reactstrap/allreactstrap'

import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
 );
 sagaMiddleware.run(rootSaga);


//ReactDOM.render(<Provider store ={store}><App/></Provider>, document.getElementById('root'));

ReactDOM.render(<Allreactstrap/>,document.getElementById('root'));
registerServiceWorker();
