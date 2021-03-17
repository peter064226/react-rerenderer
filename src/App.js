import React from "react";
import "./style.css";

const GrandChild = () => {
  console.log("render GrandChild");
  return <div>GrandChild</div>;
};

const Child = () => {
  console.log("render Child");
  return (
    <>
      <div>Child</div>
      <GrandChild />
    </>
  );
};
//证明父组件重新渲染后，无论子组件有没有属性变化都会重新渲染
export default function App() {
  const [age, setAge] = React.useState(0);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setAge(age + 1)}>{age}</button>
      <Child />
    </div>
  );
}
