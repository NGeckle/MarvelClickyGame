import React from 'react';

const Image = (props) => (
  <img src={props.src} alt={props.name} className="images" onClick={() => props.pickImg(props.name)} />
)

export default Image;