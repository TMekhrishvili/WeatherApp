import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Settings from './components/Settings'
import './index.css';
import { Tabs } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

const appTabs = {
  margin: '10px'
}

const App = () => (
  <div>
    <Tabs style={appTabs} defaultActiveKey="2">
      <TabPane tab={<span><HomeOutlined />Home</span>} key="1">
        <Home />
      </TabPane>
      <TabPane tab={<span><SettingOutlined />Settings</span>} key="2">
        <Settings />
      </TabPane>
    </Tabs>
  </div>

)

ReactDOM.render(<App />, document.getElementById('root'))