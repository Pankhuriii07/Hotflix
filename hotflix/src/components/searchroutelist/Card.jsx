import React from "react";
import "./Card.css";

const Card = ({ image, title, year, language, channel, rating, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <div className="card-info">
          <h3>{title}</h3>
          <p>{year} • {language} • {channel} • {rating}</p>
          <p className="desc">{description}</p>

          {/* ✅ Watch Now Button */}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="btn watch-btn">Watch Now</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
