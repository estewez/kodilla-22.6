import React from 'react';
import { Link } from 'react-router';
import styles from './Navi.css';

const Navi = () => {
  return (
    <div className={styles['menu-container']}>
      <ul className={styles['menu-list']}>
        <li className={styles['menu-item']}>
          <Link to="/home" className={styles['menu-link']}>
            {'Home'}
          </Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/" className={styles['menu-link']}>
            {'Posts'}
          </Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/about" className={styles['menu-link']}>
            {'About'}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navi;
