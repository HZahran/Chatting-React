import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import MainContainer from './containers/MainContainer'
import reducers from './reducers/reducers'
import { Provider } from 'react-redux';


const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><MainContainer/></Provider>, document.getElementById('app'));
