import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login / Criar</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
