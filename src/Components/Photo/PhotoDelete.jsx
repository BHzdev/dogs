import React from 'react';
import { PHOTO_DELETE } from '../../Api';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  function handleClick(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_DELETE(id, token);
  }

  return (
    <button onClick={handleClick} className={styles.delete}>
      Deletar
    </button>
  );
};

export default PhotoDelete;
