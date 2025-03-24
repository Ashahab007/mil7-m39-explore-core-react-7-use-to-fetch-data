import { use } from "react";

// 1.4 now pass the props fetchUsers as a parameter to the component or function

export default function Users({ fetchUsers }) {
  // 1.5 now use the "use(props)"
  const user = use(fetchUsers);
  console.log(user);

  return (
    <div className="users">
      <h2>Users: {user.length}</h2>
    </div>
  );
}
