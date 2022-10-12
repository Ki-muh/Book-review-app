import React from "react";
import Book from "./Book";

function BooksList({books, handleDelete}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Book Title</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Author</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Review</h3>
          </th>
        </tr>
        {books.map(books2 =>
        <Book
          key={books2.id}
          handleDelete={handleDelete}
          books2={books2}
        />
        )}
             
      </tbody>
    </table>
  );
}

export default BooksList;
