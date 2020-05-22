import {Layout, Menu, Breadcrumb, Avatar, Dropdown} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React from "react";
import { DownOutlined } from '@ant-design/icons';
import AdList from './AdList'
import SearchAd from './SearchAd'
import ProAd from './ProAd'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends React.Component{


    render() {
        const menu = (
            <Menu>
                <Menu.Item>修改用户信息</Menu.Item>
                <Menu.Divider />
                <Menu.Item>注销用户</Menu.Item>
            </Menu>
        );
        return(
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">XUPT 广告投放系统</Menu.Item>
                        <Menu.Item key="3">
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <Avatar size={30} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    用户名XXX
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item icon={<UserOutlined />} key="1">广告列表</Menu.Item>
                            <Menu.Item icon={<LaptopOutlined />} key="2">广告检索页</Menu.Item>
                            <Menu.Item icon={<NotificationOutlined />} key="3">推广广告</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>广告列表</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <AdList/>
                            {/*<SearchAd/>*/}
                            <ProAd/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }

}

export default Home;
