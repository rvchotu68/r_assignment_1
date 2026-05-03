import { Link } from "react-router-dom";

import "./Book.style.css";

function Book({ book }) {
  const { volumeInfo } = book;
  console.log(volumeInfo.imageLinks);
  return (
    <section className="book">
      <img
        src={volumeInfo.imageLinks.smallThumbnail}
        alt="book"
        className="book__img"
      />
      <div className="book__data">
        <Link className="book__title" to={`/books/${book.id}`}>
          {volumeInfo.title}
        </Link>
        <h3 className="book__subtitle">{volumeInfo.subtitle || "subtitle"}</h3>
        <p className="book__categories">
          <span>Categories: </span>
          {volumeInfo.categories.map((category) => {
            return (
              <span key={category} className="book__value">
                {category}
              </span>
            );
          })}
        </p>
        <p className="book__authors">
          <span>Authors: </span>
          {volumeInfo.authors.map((author) => {
            return (
              <span key={author} className="book__value">
                {author},
              </span>
            );
          })}
        </p>
        <p className="book__rating">
          Rating:
          <span className="book__value">
            {volumeInfo.averageRating || "NA"}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Book;
