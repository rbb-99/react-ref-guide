import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  let title = props.title;

  const clickHandler = () => {
    title = "Updated!";
    //here the title won't get updated because 
    //react has already rendered the app, and 
    //changes in such viariables or an event 
    //occuring (a click here) does not trigger 
    //the reavluation and rerendering of that component 
    //ergo comes the concept of state
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* onClick is a prop provided by Reactjs */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
