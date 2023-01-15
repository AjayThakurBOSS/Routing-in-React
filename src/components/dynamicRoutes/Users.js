import React from "react";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  {
    /* For Search Params, import useSearchParams 
       this hook behaves similar to useState. 
    only difference is that it stores the data in current URL
    Using this vary common when you have to apply search filter in the list of users.
    */
  }
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h3>User 1</h3>
      <h3>User 2</h3>
      <h3>User 3</h3>

      {/* For Search Params, import useSearchParams 
       this hook behaves similar to useState. 
    only difference is that it stores the data in current URL.*/}
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Users</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing All users.</h2>
      )}
    </div>
  );
};

export default Users;
