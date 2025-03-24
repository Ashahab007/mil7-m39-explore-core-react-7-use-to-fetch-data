export default function Friend({ friend }) {
  /* 5. Receive the props friends and destructured it */
  console.log(friend);

  return (
    <div className="users">
      <h5>Name: {friend.name}</h5>
      <h5>Email: {friend.email}</h5>
    </div>
  );
}
