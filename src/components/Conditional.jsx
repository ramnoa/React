import Welcome from "./Welcome";
import Code from "./Code";

export default function Conditional() {
    const display = true;
    if (display) {
        return <div> <Welcome/></div>
    }else{
        return <div><Code/></div>
    }
}  
    