"use client";

import { createSelector } from "@reduxjs/toolkit";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { authActions } from "../Store/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import { useAuth0 } from "@auth0/auth0-react";
import CartButton from "../UI/CartButton";
import { CounterActions } from "../Store/CounterSlice";
import { hideCounterActions } from "../Store/HideCounterSlice";

export default function NavbarWithDropdown() {
  const auth = useSelector((state) => state.auth.isAuthentication);
  const counter = useSelector((state) => state.counter.counter);
  const { logout } = useAuth0();
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  console.log("Status of the auth " + auth);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(authActions.login());

    console.log("I am insidde onCLick handler");
  };

  const signoutHandler = () => {
    dispatch(authActions.logout());
  };

  const hideCartHandler = () => {
    dispatch(hideCounterActions.hidingCounter());
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-black font-bold text-xl font-semibold dark:text-white">
          Redux Cart
        </span>
      </Navbar.Brand>
      {isAuthenticated ? (
        <div className="flex md:order-2">
          <div className="mr-6">
            <CartButton onClick={hideCartHandler} />
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={user.picture} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm font-bold text-center">
                {user.name}
              </span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>

            <ul className=" text-center">
              <button>Cart</button>
              <Dropdown.Divider />
              <button
                onClick={() => {
                  signoutHandler();
                  logout();
                }}
              >
                Sign out
              </button>
            </ul>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        <div className="flex md:order-2">
          <Button
            onClick={() => {
              onClickHandler();
              loginWithRedirect();
            }}
          />
        </div>
      )}
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
