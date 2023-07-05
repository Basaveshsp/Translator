import { useState } from "react";
import Child from "./Child";

function Parent() {
    let [user,setuser]=useState("Giome");
    return(
        <>
        <h1>This is Parent Component</h1>
        <h2>{user}</h2>
        <hr />
        <Child user={user}/>
        </>
    )
}
export default Parent;