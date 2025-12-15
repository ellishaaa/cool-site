import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const { path, src, label, text, url, cta } = props;

  const content = (
    <>
      <figure className="cards__item__pic-wrap" data-category={label}>
        <img className="cards__item__img" alt={label || "Project"} src={src} />
      </figure>
      <div className="cards__item__info">
        <h5 className="cards__item__text">{text}</h5>
        {url && (
          <a
            className="cards__item__btn"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {cta || "View site"}
          </a>
        )}
      </div>
    </>
  );

  return (
    <>
      <li className="cards__item">
        {path ? (
          <Link className="cards__item__link" to={path}>
            {content}
          </Link>
        ) : (
          <div className="cards__item__link">{content}</div>
        )}
      </li>
    </>
  );
}

export default CardItem;