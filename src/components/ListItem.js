import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/singleshow/${id}`} className="listitem">
      <img src={image} alt={name} />
      <div className="listitem_info">
        <h4 className="info_name">{name}</h4>
        <h4 className="info_rating">{rating}</h4>
      </div>
    </Link>
  );
};

export default ListItem;
