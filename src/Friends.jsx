import { use } from "react";
import Friend from "./Friend";
// 2.5 now pass the props friendsPromise as a parameter to the component or function
export default function Friends({ friendsPromise }) {
  // 2.6 now use the "use(props)"
  const friends = use(friendsPromise);
  console.log("Friends: ", friends);

  return (
    <div className="users">
      <h2>Friends:{friends.length}</h2>
      {/* 3. to get every element use map to loop over friends array by creating another component Friend in this script (Not in App.jsx)*/}
      {friends.map((friend) => (
        /* 4. pass the friend as a props */
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
