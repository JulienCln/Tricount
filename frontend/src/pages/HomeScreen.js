import React from 'react';



const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tricount</h1>
      <p style={styles.text}>Bienvenue sur mon application</p>
    </div>
  );
};

export default HomePage;
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    marginBottom: '10px',
  },
};