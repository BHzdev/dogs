import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <nav className="container">
          <Link to="/">Home</Link>
          <Link to="/login">Login / Criar</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
