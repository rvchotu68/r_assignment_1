function Book({ book }) {
  const { volumeInfo } = book;
  console.log(volumeInfo.imageLinks);
  return (
    <div>
      <img src={volumeInfo.imageLinks.thumbnail} />
      <h2>{volumeInfo.title}</h2>
      <h3>{volumeInfo.subtitle}</h3>
      <p>
        <span>Categories: </span>
        {volumeInfo.categories.map((category) => {
          return <span key={category}>{category}</span>;
        })}
      </p>
      <p>
        <span>Authors: </span>
        {volumeInfo.authors.map((author) => {
          return <span key={author}>{author}</span>;
        })}
      </p>
      <p>Rating: {volumeInfo.averageRating}</p>
    </div>
  );
}

export default Book;
