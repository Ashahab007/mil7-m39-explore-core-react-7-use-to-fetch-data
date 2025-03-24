import { use } from "react";

// 2.5 now pass the props friendsPromise as a parameter to the component or function
export default function Friends({ friendsPromise }) {
  // 2.6 now use the "use(props)"
  const friends = use(friendsPromise);
  console.log("Friends: ", friends);

  return (
    <div className="users">
      <h2>Friends:{friends.length}</h2>
    </div>
  );
}
