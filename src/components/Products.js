/* 
Here we will understand Nested routes. i.e. Navigation within the page 

*/
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="='Search Products'" />
      </div>
      <nav>
        {/* Don't include / for nested route */}
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      {/* Outlet hook render matching child components in the nested route */}
      <Outlet />
    </>
  );
};

export default Products;
