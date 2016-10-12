import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {addSushi} from './actions.js';
import Food from './components/food.jsx';

import store from './store';

window.store = store;
window.addSushi = addSushi


// Provider links react with redux
document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
    <Provider store={store}></Provider>,
    document.getElementById('root')
	);
});
