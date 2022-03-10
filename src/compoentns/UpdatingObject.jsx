import { useState } from "react";


const UpdatingObject = ({friendsArray}) => {

  // I've passed down the initial state as props
const [friends, setFriends] = useState(friendsArray);

// This function will update my state when I press it 
// I need to update this so it updates for only the pressed values

    // const handleSecondFriend = () => {
    //     setFriends(
    //         friends.map((friend) =>
    //             friend.id === 1
    //                 ? { ...friend, name: "Changed Name" }
    //                 : { ...friend }
    //         )
    //     );
    // };

   const setFriends = () => {
      friends.map((friend) =>
        friend.id === 1 ? { ...friend, name: "Changed Name" } : { ...friend }
      );
    };



return (

        <ul>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <span>name: {friend.name}</span>{" "}
                    <span>age: {friend.age}</span>
                  
                </li>
            ))}
            <button onClick={handleSecondFriend}>Change Second Name</button>
        </ul>
    );
};

export default UpdatingObject;