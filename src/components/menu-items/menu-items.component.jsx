import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-items.styles.css";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match} ${linkUrl}`)}>
    <div
      className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

// export default MenuItem;


// withRouter has some issues need to check it out soon
// Check "history" to see if it is missing from anywhere
