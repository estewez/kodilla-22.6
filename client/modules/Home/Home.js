import React from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './Home.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Hello world!</h2>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
