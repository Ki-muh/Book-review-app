import React from "react";

function UserGreeting() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 19) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }

  return (
    <h1> Good {timeOfDay}!</h1>
  )
};

export default UserGreeting;