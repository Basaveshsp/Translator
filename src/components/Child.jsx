import GranndChild from "./grandchild";

function Child({user}) {
   
    return(
        <div>
            <h1>This is Child Component</h1>
            <h2>{user}</h2>
            <hr />
            <GranndChild user={user} />
        </div>
    )
}
export default Child;