import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const Item = ({ item }) => {
  let meta = !item.meta ? (
    <img width="500px" height="auto" src={item.link} />
  ) : item.meta.data.ogType === 'article' ? (
    <div>
      <h3>{item.meta.data.ogSiteName}</h3>
      <a href={item.meta.data.ogUrl}>
        <h2>{item.meta.data.ogTitle}</h2>
      </a>
      <p>{item.meta.data.ogDescription}</p>
      <img src={item.meta.data.ogImage.url} width="500px" height="auto" />
    </div>
  ) : (
    <iframe
      width="500px"
      height="auto"
      src={item.meta.data.twitterPlayer.url}
    />
  );
  return meta;
};

export default Item;
