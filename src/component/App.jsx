import React from "react";
import "../../public/styles.css";
import Heading from "./Heading.jsx";
import List from "./List.jsx";

const name = "Epsilon Group";
// const date = new Date(2021, 1, 1, 10);
const date = new Date();
const year = date.getFullYear();
const hour = date.getHours();

const img1 = "https://picsum.photos/200?grayscale";
const img2 = "https://picsum.photos/201";
const img3 = "https://picsum.photos/202";

const styling1 = {
  color: "red",
  fontSize: "19px",
  border: "1px solid black"
};

let greeting;

if (hour < 12) {
  greeting = "Good Morning";
  styling1.color = "blue";
} else if (hour < 18) {
  greeting = "Good Afternoon";
  styling1.color = "red";
} else {
  greeting = "Good Night";
  styling1.color = "green";
}

function App() {
  return (
    <div>
      <Heading />
      <List />
      <img className="car-img" src={img1} alt="" />
      <img className="car-img" src={img2} alt="" />
      <img className="car-img" src={img3} alt="" />
      <br />
      <p style={{ color: "red" }}>{greeting}</p>
      <p style={styling1}>Created by {name}</p>
      <p>Copyright {year}</p>
    </div>
  );
}

export default App;
