import React from "react";

const Profile = () => {
  const userId = localStorage.getItem("userId");

  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 User Profile</h2>
      <p>User ID: {userId}</p>
      <p>More profile info coming soon...</p>
    </div>
  );
};

export default Profile;
