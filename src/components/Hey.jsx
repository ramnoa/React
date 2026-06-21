// This is a simple React component named "Hey" that takes in props and renders a greeting message. The component uses the props to display the name, city, and an emoji in the greeting. The console.log statement is used to log the props to the console for debugging purposes. Finally, the component is exported for use in other parts of the application.
/*function Hey(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Hello from Hey! component to {props.name} from {props.city}{" "}
        {props.emoji}
      </h1>
    </div>
  );
}

export default Hey;*/

//This is an alternative implementation of the "Hey" component that uses destructuring to extract the props directly in the function parameters. This makes the code cleaner and easier to read. The component still renders a greeting message using the name, city, and emoji props. The console.log statement is also included for debugging purposes. Finally, the component is exported for use in other parts of the application.
/*function  Hey({ name, city, emoji }) {
    return (
        <div>
            <h1>Hello from Hey! component to  {name} from {city} {emoji} </h1>
        </div>
    )
}

export default Hey;*/

//This is another implementation of the "Hey" component that defines a person object within the component. The person object contains properties such as name, city, emoji, and SeatNo. The component then uses the person object to render a greeting message. However, in this implementation, the props passed to the component are not being used, and instead, the hardcoded person object is being used to display the information. The console.log statement is not included in this implementation. Finally, the component is exported for use in other parts of the application.
function  Hey(props) {
    
    return (
        <div>
            <h1>Hello from Hey! component to  {props.person.name} from {props.person.city} {props.person.emoji} {props.person.SeatNo} </h1>
        </div>
    )
}

export default Hey;