import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";
import { useState } from "react";

const ExpenseItem = (props) => {
  //all such hooks must be called only inside of react components
  //functions and not inside of nested functions (∃ an exception)
  //useState must be provided with an initial default value
  //it returns an array with 2 values, 1. value itself 2. updating function
  const [title, setTitle] = useState(props.title);
  //here, we use const because the updation is not by '='

  const clickHandler = () => {
    setTitle("Updated!");
    //thus, only the component in which the state is registered is revaluated by react
    //BUT not any other components; state is independent of its component instances 
    //ie every instance of ExpenseItem has its own state
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
