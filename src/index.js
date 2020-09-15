import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Themes
import './scss/style.core.scss';

// Components
import Home from '../src/views/home';
import Search from '../src/views/search';
import ProductDetail from '../src/views/product-detail';
import Trending from '../src/views/trending';
import TrendingDetail from '../src/views/trending/trending-detail';
import { Layout } from './components/layouts';

// Services
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route
                        path="/"
                        component={Home}
                        exact
                    />
                    <Route
                        path="/search"
                        component={Search}
                    />
                    <Route
                        path="/product-detail"
                        component={ProductDetail}
                    />
                    <Route
                        path="/trending"
                        component={Trending}
                    />
                    <Route
                        path="/trending-detail"
                        component={TrendingDetail}
                    />
                </Switch>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
