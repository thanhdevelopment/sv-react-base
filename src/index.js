import React from 'react';
import ReactDOM from 'react-dom';

// Themes
import './scss/style.core.scss';

// Components
import App from './App';

// Components
import { Layout } from './components/layouts';

// Services
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Layout>
            <App />
        </Layout>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
