import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import Home from "./page/Home";
import Admin from "./page/Admin";
import {Affix, Card, Tag, BackTop, Pagination, Avatar, Button, Layout, Menu, Breadcrumb, Icon} from 'antd';


class App extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/admin" component={Admin}/>
                    </Switch>
                </BrowserRouter>
                <BackTop visibilityHeight={100}/>
            </div>

        );
    }
}

export default App;
