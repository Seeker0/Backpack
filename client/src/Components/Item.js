import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const Item = ({ item }) => {
  let meta = !item.meta ? (
    <div>
      <p>Invalid Item</p>
    </div>
  ) : item.meta.data.ogType === "string" ? (
    <div>
      <h3>{item.name}</h3>
      <a href={item.link} target="_blank">
        {item.link}
      </a>
    </div>
  ) : item.meta.data.ogType === "pic" ? (
    <div>
      <h3>{item.name}</h3>
      <a href={item.link} target="_blank">
        <img alt="" className="picture-item" src={item.link} />
      </a>
    </div>
  ) : item.meta.data.ogType === "article" ? (
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
  ) : item.meta.data.ogType === "website" ? (
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
  ) : !item.meta.data.ogType ? (
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
  ) : item.meta.data.twitterPlayer ? (
    <iframe
      alt=""
      title="iframe"
      frameBorder="0"
      allowFullScreen="allowfullscreen"
      className="picture-item"
      src={item.meta.data.twitterPlayer.url}
    />
  ) : null;
  return meta;
};

export default Item;
