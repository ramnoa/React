import { useState } from "react";
export default function Form() {
    //since we are using form we need to use state to store the value of the input field
            // const [Name, setName] = useState("");
     const [Name, setName] = useState({ FirstName: "", LastName: "" });       
    return (
        <div> 
            <form >
                <input onChange={(e) => setName({...Name, FirstName: e.target.value})}  type="text" value={Name.FirstName}></input>
                <input onChange={(e) => setName({...Name, LastName: e.target.value})}  type="text" value={Name.LastName}></input>
                </form>  
        </div>
    )
}