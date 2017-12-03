import React, {Component} from 'react'
import logo from '../logo.svg';
import './Home.css';
import {Affix, Card, Tag, BackTop, Pagination, Avatar, Button, Layout, Menu, Breadcrumb, Icon} from 'antd';
import MyArticle from "../components/MyArticle";
import MyArticleLisView from "../components/ArticleListView";

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;


class Home extends Component {

    componentWillMount() {
        console.log(this)
        console.log("componentWillMount")
    }

    componentWillReceiveProps() {

        console.log("componentWillReceiveProps")

    }

    componentDidMount() {
        this.state.count = this.state.count + 1;
        console.log("componentDidMount")

    }

    componentDidUpdate() {
        console.log("componentDidUpdate")

    }

    componentWillUnMount() {
        console.log("componentWillUnMount")

    }

    componentDidUnMount() {
        console.log("componentDidUnMount")

    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            collapsed: true,

        };
        this.toggle = this.toggle.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={this.onCollapse}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="App-logo user-icon">
                        <Avatar size="large" icon="user"/>
                    </div>
                    <Menu theme="dark"
                          defaultSelectedKeys={['1']}
                          mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop"/>
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user"/><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team"/><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file"/>
                            <span>File</span>
                        </Menu.Item>

                        <SubMenu key="sub3" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <Card>
                        <Tag color="pink">pink</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="purple">purple</Tag>
                    </Card>
                </Sider>
                <Layout>

                    <Header style={{padding: 0,}}>
                    </Header>
                    <Content style={{margin: '16px ', textAlign: 'center'}}>
                        <MyArticleLisView/>
                        <Pagination total={50} itemRender={this.itemRender} style={{marginTop: '16px'}}/>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>

                </Layout>
            </Layout>
        );
    }
}

export default Home;