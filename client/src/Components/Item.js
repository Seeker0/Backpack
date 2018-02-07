import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const Item = ({ item }) => {
  let meta = !item.meta ? (
    <div>
      <p>Invalid Item</p>
    </div>
  ) : item.meta.data.ogType === 'string' ? (
    <div>
      <p>{item.link}</p>
    </div>
  ) : item.meta.data.ogType === 'pic' ? (
    <img width="500px" height="300px" src={item.link} />
  ) : item.meta.data.ogType === 'article' ? (
    <div>
      <h3>{item.meta.data.ogSiteName}</h3>
      <a href={item.meta.data.ogUrl}>
        <h2>{item.meta.data.ogTitle}</h2>
      </a>
      <p>{item.meta.data.ogDescription}</p>
      <a href={item.meta.data.ogUrl}>
        <img src={item.meta.data.ogImage.url} width="500px" height="auto" />
      </a>
    </div>
  ) : item.meta.data.ogType === 'website' ? (
    <div>
      <a href={item.meta.data.ogUrl}>
        <h2>{item.meta.data.ogTitle}</h2>
      </a>
      <p>{item.meta.data.ogDescription}</p>
      <a href={item.meta.data.ogUrl}>
        <img src={item.meta.data.ogImage.url} width="500px" height="300" />
      </a>
    </div>
  ) : (
    <iframe
      width="500px"
      height="auto"
      src={item.meta.data.twitterPlayer.url}
    />
  );
  console.log('=======================');
  console.log(item);
  console.log('=======================');
  return meta;
};

export default Item;
