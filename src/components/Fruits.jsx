import Fruit from "./Fruit";
export default function Fruits() {
    //const Fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
    const Fruits = [{name:"apple", price:10,emoji:"🍎", soldout:false},
                    {name:"banana", price:10,emoji:"🍌", soldout:true},
                    {name:"orange", price:20,emoji:"🍊", soldout:true},
                    {name:"mango", price:30,emoji:"🥭", soldout:false},
                    {name:"grapes", price:50,emoji:"🍇", soldout:true},
                    {name:"pinapple", price:70, emoji:"🍍", soldout:false}]
    return (
    <div>
        <ul>
    {Fruits.map((fruit) => (
        //<li><Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} /></li>
        <Fruit
        key ={fruit.name} 
        name={fruit.name} 
        price={fruit.price} 
        emoji={fruit.emoji} 
        soldout= {fruit.soldout}/>
    ))}
    </ul>
    </div>)
}
