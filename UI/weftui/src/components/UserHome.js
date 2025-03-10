import React from 'react'
import { useUser } from '../UserContext';

function UserHome() {
  const { user } = useUser();
  console.log(user);
  return (
    <nav>
      <div>
        {user ? (
          <span>Welcome, {user.name || user.email}</span>
          
        ) : (
          <span>Not Logged In</span>
        )}
      </div>
    </nav>
  );
};

export default UserHome