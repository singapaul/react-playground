import { useState } from "react";
import TwoArrays from "./compoentns/TwoArrays";
import "./App.css";
import UpdatingObjectInTwoArray from "./compoentns/UpdatingObjectInTwoArray";
import UpdatingObject from "./compoentns/UpdatingObject";

const friendsArray = [
  {
    id: 1,
    name: "handy",
    age: 29,
  },
  {
    id: 2,
    name: "Candy",
    age: 18,
  },
  {
    id: 3,
    name: "mandy",
    age: 80,
  },
];

const App = () => {
  const [friends, setFriends] = useState(friendsArray); // Setting default value



  return (
    <main>
      <h1>Hello Developers</h1>

      <UpdatingObject friendsArray={friendsArray} setFriends={setFriends} />

      <h1>IGNORE THE BELOW! </h1>

      <h2>Adding a new value in two dimensional array(array in Array)</h2>
      {/* Adding a new value in two dimensional array(array in Array) */}
      <TwoArrays />
      <h2>
        Updating a specific object in two dimensional array(array in Array)
      </h2>
      {/* Updating a specific object in two dimensional array(array in Array) */}
      <UpdatingObjectInTwoArray />
    </main>
  );
};

export default App;
