import { useState } from "react";
export default function Form() {
    const [Name, setName] = useState("");
    
    return (
        <div> 
            <form >
                <input onChange={(e) => setName(e.target.value)}  type="text" value={Name}></input></form>  
        </div>
    )
}