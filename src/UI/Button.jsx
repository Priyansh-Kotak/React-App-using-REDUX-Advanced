"use client";

import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";

export default function ButtonsWithIcon(props) {
  return (
    <>
      <Button onClick={props.onClick}>
        <p>Log in</p>
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </>
  );
}
