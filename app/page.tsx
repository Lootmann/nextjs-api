import React from "react";

async function page() {
  const users: User[] = await fetch("http:localhost:3000/api/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
