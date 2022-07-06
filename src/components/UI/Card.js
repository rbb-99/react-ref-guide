// This type of component is basically a shell ie a container surrounding some other component
// aka wrapper component, for this to work around customized html/jsx components,
// we output default props.children (contains all the content in the wrapper)
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
