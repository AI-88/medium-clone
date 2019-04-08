import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: '#ffffff',
    textAlign: 'center'
  }
};

const Landing = () => (
  <div style={styles.container}>
    <div>
      <h1><span role='img' aria-label='computer-emoji'>💻</span> Welcome to Limitless CMS</h1>
    </div>
  </div>
);

export default Landing;
