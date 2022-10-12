import React, { useState, useEffect } from "react";
import BooksList from "./BooksList";

function Books() {
    const [books, setbooks] = useState([])
    const [newbooks, setNewBook] = useState([])
    
    function fetcher() {
      fetch("https://example-data.draftbit.com/books?_limit=50")
        .then(resp => resp.json())
        .then(result => {
          setNewBook(result)
          setbooks(result)
        })
    }
  
    useEffect(() => {
      fetcher()
    }, [])
  
    function handleSubmit(obj) {
      console.log(obj);
      fetch("https://example-data.draftbit.com/books?_limit=50", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...obj, "amount": parseInt(obj.amount) })
      }).then(() => fetcher())  
    }
  
    function handleChange(e) {
      let enter = e.target.value.toLowerCase();
      setbooks(newbooks.filter(value =>
        value.description.toLowerCase().includes(enter)
      )
      );
    }
    
    function handleDelete(id){
      fetch(`https://example-data.draftbit.com/books?_limit=50/${id}`,{
        method:"DELETE"
      })
      .then(()=>fetch());
    }
  
    return (
      <div>
        {/* <Search handleChange={handleChange}/> */}
        {/* <AddBook submit={handleSubmit}/> */}
        <BooksList 
          books ={books}
          handleDelete ={handleDelete}
        />
      </div>
    );
  }

export default Books;
