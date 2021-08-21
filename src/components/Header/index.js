import './Header.less';
import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import { Layout, Menu, Button, Dropdown, Drawer } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, DownOutlined, UserOutlined, SearchOutlined, MenuOutlined,
    CalendarOutlined,
    LinkOutlined, } from '@ant-design/icons';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';

const { Header, } = Layout;
const { SubMenu } = Menu;

export default class HeaderComp extends Component {

    constructor(props){
        super(props);

        this.state={
            isScrolled: false,
            current: 'mail',
            isOpenDrawer: false,
        }

        this.onScrolling = this.onScrolling.bind(this);
    }

    componentDidMount(){
        document.addEventListener('scroll', this.onScrolling);
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.onScrolling);
    }

    onScrolling(e){
        // console.log(e);
        if(window.scrollY>5){
            this.setState({isScrolled: true})
        }else{
            this.setState({isScrolled: false})
        }
    }

    handleClick = e => {
        // console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    showDrawer = () => {
        this.setState({isOpenDrawer: true})
    };

    onCloseDrawer = () => {
        this.setState({isOpenDrawer: false})
    };


    render() {
        const { isScrolled, isOpenDrawer }=this.state;

        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  Profile
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                 Account Settings
                </a>
              </Menu.Item>
              <Menu.Item>
                <a  rel="noopener noreferrer" href="/changeEmail">
                 Change Email
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  Logout
                </a>
              </Menu.Item>
            </Menu>
          );

        return (
            <Header className={isScrolled ? "header-blue" : ''}>
                <div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex'}}>
                        <div className="logo" ><img src={process.env.PUBLIC_URL +'/assets/white_logo.png'} alt='logo' /></div>
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            {/* <Menu.Item key="mail" icon={<MailOutlined />}>
                                Navigation One
                            </Menu.Item>
                            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                                Navigation Two
                            </Menu.Item> */}
                            <SubMenu title={<span>Home &nbsp; <DownOutlined /></span>}>
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="celebrities">
                                <Link to="/celebrities">
                                Social Media Stars
                                </Link>
                            </Menu.Item>
                           
                            <Menu.Item key="Experience">
                                <Link to="https://ant.design">
                                      Experience
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="Download">
                                <Link to="https://ant.design" >
                                    Download
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div style={{display: 'flex'}}>

                        <div className={'search-root'} >
                            <HeaderSearch
                                placeholder="search ..."
                                // defaultOpen={true}
                                // open={false}
                                dataSource={['item 1', 'item 2', 'item 3']}
                                onSearch={value => {
                                    console.log('input', value); // eslint-disable-line
                                }}
                                onPressEnter={value => {
                                    console.log('enter', value); // eslint-disable-line
                                }}
                            />
                        </div>

                        <Link className='login' to='/login'><SearchOutlined />&nbsp; Login</Link>

                        <Button className="menu-btn" onClick={this.showDrawer} type="primary" icon={<MenuOutlined  />} size={22} />
                        
                        <Dropdown overlay={menu} placement="bottomRight">
                             <Button className="account-btn" type="primary" icon={<UserOutlined />} size={22} />
                        </Dropdown>

                    </div>
                </div>
                <Drawer
                    title={<img src={process.env.PUBLIC_URL +'assets/white_logo.png'} alt='logo' />}
                    placement="left"
                    closable={false}
                    onClose={this.onCloseDrawer}
                    visible={isOpenDrawer}
                >
                    <Menu
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode={'inline'}
                        theme={'light'}
                        >
                        <SubMenu key="sub1" icon={null} title="Home">
                            <Menu.Item key="3">Option 1</Menu.Item>
                            <Menu.Item key="4">Option 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="1" icon={null}>
                            Celebrities
                        </Menu.Item>
                        <Menu.Item key="2" icon={null}>
                            Social Media Stars
                        </Menu.Item>
                        <Menu.Item key="3" icon={null}>
                            Experience
                        </Menu.Item>
                        <Menu.Item key="5" icon={null}>
                            Download
                        </Menu.Item>
                    </Menu>
                </Drawer>
            
            </Header>
        )
    }
}
