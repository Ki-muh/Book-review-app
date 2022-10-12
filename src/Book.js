import React from "react";
import Review from "./Review";

function Book({handleDelete, books2}) {
  const {id, title, authors } = books2

  function handleDelete(){
    handleDelete(id)
  }
  return (
    <tr onClick={handleDelete}>
      <td>{title}</td>
      <td>{authors}</td>
      <td>{<Review />}</td>
    </tr>
  );
}

export default Book;
