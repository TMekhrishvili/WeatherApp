import React from 'react';
import './settings.css';
import Difficulty from '../Difficulty';
import Unit from '../Unit';
import History from '../History';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

const Settings = () => {

    return (
        <Layout>
            <Sider>
                <Difficulty />
                <Unit />
            </Sider>
            <Content>
                <History />
            </Content>
        </Layout>

    );
}

export default Settings