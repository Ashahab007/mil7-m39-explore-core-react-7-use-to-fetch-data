import { Suspense, useState } from "react";

import "./App.css";
import Users from "./Users";
import Friends from "./Friends";

// ! Use of 'use' for fetching data

// 1.1 fetch the data using fetch
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

// 2.1 fetch the data using async/await

const fetchFriends = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

function App() {
  // 2.2 Set the fetch friends to a variable (Note: only for using async/ await)
  const friendsPromise = fetchFriends();
  return (
    <>
      <h3>Vite + React</h3>
      <h2>Use of 'use' for fetching data using fetch</h2>
      {/* 1.2 Wrap the component into suspense with fallback */}
      <Suspense fallback={<h3>Loading.....</h3>}>
        {/* 1.3 Pass the fetchUsers as a props to the component dynamically */}
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <br />

      {/* 2.3 Wrap the component into suspense with fallback  */}
      <Suspense fallback={<h3>Friends are coming ..... </h3>}>
        {/* 2.4  Pass the friendsPromise as a props to the component dynamically*/}
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </>
  );
}

/***Procedure using fetch
 * 1. fetch the data using fetch
 * 2. Wrap the component into suspense with fallback
 * 3. use the fetch data in App() as a props to the component dynamically
 * 4. now pass the props as a parameter to the component or function that's created in jsx file.
 * 5. now use the "use(props)"
 
***Procedure using async
* 1. fetch the data using async/await
* 2. Set the fetch friends to a variable (Note: only for using async/ await)
* 3. Wrap the component into suspense with fallback
* 4. Pass the friendsPromise as a props to the component
* 5. now pass the props friendsPromise as a parameter to the component or function
* 6. now use the "use(props)"
 */
export default App;
