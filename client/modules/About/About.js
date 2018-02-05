import React from 'react';
import { connect } from 'react-redux';


// Import Style
import styles from './About.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h2>Information about the page</h2>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
