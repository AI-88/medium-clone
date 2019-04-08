import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center'
  }
};

const Landing = () => (
  <div style={styles.container}>
    <div>
      <Title level={2}><span role='img' aria-label='computer-emoji'>💻</span> Welcome to Limitless CMS</Title>
    </div>
  </div>
);

export default Landing;
