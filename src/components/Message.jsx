
export default function Message(){
    function HandleClick(){
       alert("Button Clicked");
       // console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick = {HandleClick}>Click Me</button>
        </div>
    )
}