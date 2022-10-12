import React from "react";
import UserGreeting from "./UserGreeting";
// import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            {/* <Link to='/' /> */}
            <UserGreeting />
            <h1 style={{color: "blue"}} >Welcome To Classic Biblichor Reads</h1>
        </div>
    )
}

export default Home;