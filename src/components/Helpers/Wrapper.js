const Wrapper = (props) => {
  return props.children;
};
export default Wrapper;

//wrapper is just a developer created method to bypass returning multiple components in one return statement
//react provides an inbuilt way of doing so with <React.Fragment></React.Fragment> which can be imported from react library
//shorthand notation of fragment is <></>
