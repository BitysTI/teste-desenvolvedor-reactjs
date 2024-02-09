import React from "react";
import Card from "../Card";
import { UserListStyle } from "./style";

function UserList({ users, profiles, onDelete }) {
  return (
    <UserListStyle>
      {users.map((user) => (
        <Card
          key={user.id}
          user={user}
          profiles={profiles}
          onDelete={onDelete}
        />
      ))}
    </UserListStyle>
  );
}

export default UserList;
