import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const { path, src, label, title, description, text, url, cta } = props;

  // Backwards compatibility: if title/description not provided, fall back to text
  const heading = title || text;
  const body = description || "";

  const content = (
    <>
      <figure className="cards__item__pic-wrap" data-category={label}>
        <img className="cards__item__img" alt={heading} src={src} />
      </figure>
      <div className="cards__item__info">
        {heading && <h5 className="cards__item__title">{heading}</h5>}
        {body && <p className="cards__item__description">{body}</p>}
        {url && (
          <a
            className="cards__item__btn"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {cta || "View Project"}
            <span className="cards__item__btn-icon">►</span>
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