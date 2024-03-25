import React from "react";
import {useState} from "react";
import Chapter from './Chapter';

const Book = () => {
    const [book, setBook] = useState("Harry Potter");
    return <Chapter book={book} />;
  };

  export default Book;