import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const items = {
  invalid: item => (
    <div>
      <p>Invalid Item</p>
    </div>
  ),
  string: item => (
    <div>
      <h3>{item.name}</h3>
      <a href={item.link} target="_blank">
        {item.link}
      </a>
    </div>
  ),
  pic: item => (
    <div>
      <h3>{item.name}</h3>
      <a href={item.link} target="_blank">
        <img alt="" className="picture-item" src={item.link} />
      </a>
    </div>
  ),
  article: item => (
    <div>
      <h3>{item.name}</h3>
      <h3>{item.meta.data.ogSiteName}</h3>
      <a
        href={item.meta.data.ogUrl ? item.meta.data.ogUrl : null}
        target="_blank"
      >
        <h2>{item.meta.data.ogTitle}</h2>
      </a>
      <p>{item.meta.data.ogDescription}</p>
      <a
        href={item.meta.data.ogUrl ? item.meta.data.ogUrl : null}
        target="_blank"
      >
        <img
          alt=""
          src={item.meta.data.ogImage ? item.meta.data.ogImage.url : null}
          className="picture-item"
        />
      </a>
    </div>
  ),
  website: item => (
    <div>
      <h3>{item.name}</h3>
      <a
        href={item.meta.data.ogUrl ? item.meta.data.ogUrl : null}
        target="_blank"
      >
        <h2>{item.meta.data.ogTitle}</h2>
      </a>
      <p>
        {item.meta.data.ogDescription ? item.meta.data.ogDescription : null}
      </p>
      <a
        href={item.meta.data.ogUrl ? item.meta.data.ogUrl : null}
        target="_blank"
      >
        <img
          alt=""
          src={item.meta.data.ogImage ? item.meta.data.ogImage.url : null}
          className="picture-item"
        />
      </a>
    </div>
  ),
  media: item => (
    <iframe
      alt=""
      title="iframe"
      frameBorder="0"
      allowFullScreen="allowfullscreen"
      className="picture-item"
      src={item.meta.data.twitterPlayer.url}
    />
  ),
  noType: item => (
    <div>
      <a href={item.meta.requestUrl} target="_blank">
        <h2>{item.meta.data.ogTitle}</h2>
      </a>
      <p>{item.meta.data.ogDescription}</p>
      <a href={item.meta.requestUrl} target="_blank">
        <img
          alt=""
          src={item.meta.data.ogImage ? item.meta.data.ogImage.url : null}
        />
      </a>
    </div>
  ),
  null: item => null
};

const itemTester = item => {
  let type;
  if (!item.meta) {
    type = 'invalid';
    return type;
  }
  if (item.meta.data) {
    if (item.meta.data.ogType) {
      if (item.meta.data.twitterPlayer) {
        type = 'media';
        return type;
      }
      type = items[item.meta.data.ogType] ? item.meta.data.ogType : 'website';
      return type;
    }
    type = 'noType';
    return type;
  }
  return type;
};

const Item = ({ item }) => {
  const type = itemTester(item);
  console.log(type);
  console.log(item);
  return items[type](item);
};

export default Item;
