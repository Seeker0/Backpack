import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
      <a href={item.meta.data.ogUrl ? item.meta.data.ogUrl : null}>
        <h2>{item.meta.data.ogTitle}</h2>
      </a>
      <p>{item.meta.data.ogDescription}</p>
      <a href={item.meta.data.ogUrl ? item.meta.data.ogUrl : null}>
        <img
          src={item.meta.data.ogImage ? item.meta.data.ogImage.url : null}
          width="500px"
          height="auto"
        />
      </a>
    </div>
  ) : item.meta.data.ogType === 'website' ? (
    <div>
      <a href={item.meta.data.ogUrl ? item.meta.data.ogUrl : null}>
        <h2>{item.meta.data.ogTitle}</h2>
      </a>
      <p>
        {item.meta.data.ogDescription ? item.meta.data.ogDescription : null}
      </p>
      <a href={item.meta.data.ogUrl ? item.meta.data.ogUrl : null}>
        <img
          src={item.meta.data.ogImage ? item.meta.data.ogImage.url : null}
          width="500px"
          height="300"
        />
      </a>
    </div>
  ) : !item.meta.data.ogType ? (
    <div>
      <a href={item.meta.requestUrl}>
        <h2>{item.meta.data.ogTitle}</h2>
      </a>
      <p>{item.meta.data.ogDescription}</p>
      <a href={item.meta.requestUrl}>
        <img src={item.meta.data.ogImage ? item.meta.data.ogImage.url : null} />
      </a>
    </div>
  ) : item.meta.data.twitterPlayer ? (
    <iframe
      width="500px"
      height="auto"
      src={item.meta.data.twitterPlayer.url}
    />
  ) : null;
  return meta;
};

export default Item;
