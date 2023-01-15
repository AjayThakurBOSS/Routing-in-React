import React from "react";
import { useParams } from "react-router-dom";

const UsersDetails = () => {
  /* useParams is a hook that is used to get dynamic key-value from current URL.
   , this hook return a key value pairs.*/
  const params = useParams();
  const userId = params.userId;

  return <div>Details about Users {userId} </div>;
};

export default UsersDetails;
