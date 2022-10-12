import React, { useState } from "react";

function Review() {
    const [review, setReview] = useState("");


    const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The Review you entered was recorded.`)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={review}
          onChange={(e) => setReview(e.target.value)}
        /><span/><button type="submit">Review</button>
    </form>
  )
}

export default Review;