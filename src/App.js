import { AuthProvider } from "./components/authentication/auth";
import { useAuth } from "./components/authentication/auth";
import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummery from "./components/OrderSummery";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/dynamicRoutes/Users";
import UsersDetails from "./components/dynamicRoutes/UsersDetails";
import Admin from "./components/dynamicRoutes/Admin";
import Profile from "./components/authentication/Profile";
import Login from "./components/authentication/Login";
import RequireAuth from "./components/authentication/RequireAuth";

// import LazyLoad from "./components/LazyLoad";
/* 
for lazy load we can not import component as normal. we have to import it in following ways. 
lazy() is a function which takes another function as argument and gives dynamic import as bellow.
*/
const LazyLazyLoad = React.lazy(() => import("./components/LazyLoad"));

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/OrderSummery" element={<OrderSummery />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
          {/* Nested routes inside the Product components */}
          <Route path="/Products" element={<Products />}>
            <Route path="featured" element={<FeaturedProduct />}></Route>
            <Route path="new" element={<NewProduct />}></Route>
            {/* Index Route
          It is also going to be nested route but in-place of path we put Index.
        */}
            <Route index element={<FeaturedProduct />} />
          </Route>
          {/* Dynamic Route */}
          <Route path="users" element={<Users />}></Route>
          {/* <Route path="users/1" element={<UsersDetails />}></Route>
        <Route path="users/2" element={<UsersDetails />}></Route>
        <Route path="users/3" element={<UsersDetails />}></Route> */}
          {/* but above way is not an optimal way apply Dynamic Route. in such case is we have to make 100 routes if there is 
          100 users. in place of above we can use following 
           this "userId" can be any string of number. not only number.
           Dynamic Route can be nested route or can be outside also. if it nested then we have to remove parent path.
          And We need to add <Outlet/> component in the users component to render the child component.*/}
          <Route path="users/:userId" element={<UsersDetails />}></Route>
          <Route path="users/admin" element={<Admin />}></Route>
          <Route
            path="LazyLoad"
            element={
              <React.Suspense fallback="Loading...">
                <LazyLazyLoad />
              </React.Suspense>
            }
          ></Route>
          {/* Authentication */}
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
