import { useState, useEffect } from "react";

import Book from "./Book.Component.jsx";
import Loader from "./Loader.Component.jsx";
import Error from "./Error.Component.jsx";

function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  async function fetchData(signal) {
    try {
      setIsLoading(true);
      const url =
        "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
        signal,
      });

      const { data } = await response.json();
      //   console.log(data.data);
      setBooks((b) => {
        return [...b, ...data.data];
      });
    } catch (err) {
      if (err.name === "AbortError") console.log("Request aborted");
      else setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  //initial books
  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  if (isError) return <Error />;

  if (isLoading) return <Loader />;

  return (
    <section>
      <h1>Books</h1>

      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

export default Books;
