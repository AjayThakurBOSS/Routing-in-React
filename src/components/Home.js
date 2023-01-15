import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  //useNavigate is a method. And it returns a function and in that function we have to pass the link component as parameter. As in the example.
  const navigate = useNavigate();

  return (
    <div>
      HOmepage
      {/* <button onClick={() => navigate("OrderSummery")}>Place Order</button> */}
      {/* After adding { replace: true }, it will go all way to the blank page instead of going one step back. */}
      <button onClick={() => navigate("OrderSummery", { replace: true })}>
        Place Order
      </button>
    </div>
  );
};

export default Home;
