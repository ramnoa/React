export default function Fruit({name , price, emoji , soldout }) {
    return (<>
        
         <li>
            {name} {emoji} ${price} {soldout == true ? "Sold Out" : ""}
        </li> 
         
        </>
        );
}