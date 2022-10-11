import React, { useState, useEffect } from "react";

function Books() {
//     const [books, setBooks] = useState([])

// useEffect(() => {
//     fetch("https://example-data.draftbit.com/books?_limit=50")
//     .then(r => r.json())
//     .then(data => setBooks(data))
// })

    return(
        <div>
            <p>Hello, my name is K and...</p>
        </div>
    );
}

export default Books;





// import React from "react";

// function Books() {
//     const [books, setBooks] = useState([])

//     // const { favorites, addToFavorites, removeFromFavorites } = useAppContext()

//     // const navigate = useNavigate()

//     function favoritesChecker(id) {
//         const boolean = favorites.some((book) => book.id === id)
//         return boolean
//     }

//     function fetchData() {
//         fetch("http://localhost:8000/books")
//             .then(resp => resp.json())
//             .then(result => setBooks(result))
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])


//     return <div className="book-list">
//         {books.map((book) => (
//             <div key={book.id} className="book" >
//                 <div>
//                     <h4>{book.title}</h4>
//                 </div>
//                 <div>
//                     <img src={book.image_url} alt="#" onClick={()=>navigate(`/book/${book.id}`)}/>
//                 </div>
//                 <div>
//                     {favoritesChecker(book.id) ? (
//                         <button onClick={() => removeFromFavorites(book.id)}>
//                             Remove from Favorites
//                         </button>
//                     ) : (
//                         <button onClick={() => addToFavorites(book)}>
//                             Add to Favorites
//                         </button>
//                     )}

//                 </div>
//             </div>
//         ))}
//     </div>
// }

// export default Books;`