import useCounter from "../hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
  // even though the logic is same, the state is not
  // shared, each component will manage it's own state
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
