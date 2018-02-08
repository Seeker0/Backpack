import React from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
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
        <img className="picture-item" src={item.link} />
      </a>
    </div>
  ) : item.meta.data.ogType === "article" ? (
    <div>
      <h3>{item.name}</h3>
      <h3>{item.meta.data.ogSiteName}</h3>
      <a href={item.meta.data.ogUrl} target="_blank">
        <h3>{item.meta.data.ogTitle}</h3>
      </a>
      <p>{item.meta.data.ogDescription}</p>
      <a href={item.meta.data.ogUrl} target="_blank">
        <img src={item.meta.data.ogImage.url} className="picture-item" />
      </a>
    </div>
  ) : item.meta.data.ogType === "website" ? (
    <div>
      <h3>{item.name}</h3>
      <a href={item.meta.data.ogUrl} target="_blank">
        <h3>{item.meta.data.ogTitle}</h3>
      </a>
      <p>{item.meta.data.ogDescription}</p>
      <a href={item.meta.data.ogUrl} target="_blank">
        <img src={item.meta.data.ogImage.url} className="picture-item" />
      </a>
    </div>
  ) : (
    <div>
      <a href={item.meta.data.ogUrl} target="_blank">
        <h3>{item.name}</h3>
      </a>
      <iframe
        className="iframe-item picture-item"
        src={item.meta.data.twitterPlayer.url}
        frameBorder="0"
        allowFullScreen="allowfullscreen"
      />
    </div>
  );
  return meta;
};

export default Item;
