import React from "react";
import UserGreeting from "./UserGreeting"

function Home() {
    return(
        <div>
            <UserGreeting />
            <h1 style={{color: "blue"}} >Classic Reads</h1>
        </div>
    )
}

export default Home;