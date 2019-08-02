import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Calculator from './components/Calculator/Calculator';
import Header from './components/Header/Header';

import store from './store';
import './styles/base.css';

const BasePage = () => (
    <Provider store={store}>
        <Header />
        <section className='content'>
            <Calculator />
        </section>
    </Provider>
);

ReactDOM.render(<BasePage />, document.getElementById('root'));