import './App.less';
import React from 'react';
import {
  Layout
} from 'antd';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./pages";

const { Content } = Layout;

const App = () => (
  <Router>
    <Layout>
      { <Header /> }
      <Content>
        <Routes />
      </Content>
      <Footer />
    </Layout>
  </Router>
);

export default App;