import React from 'react';
import useFetch from '../../Hooks/useFetch';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return <div className={styles.modal}>FeedModal</div>;
};

export default FeedModal;
