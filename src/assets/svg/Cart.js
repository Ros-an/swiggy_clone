import * as React from "react";

function Cart(props) {
  return (
    <svg
      className="prefix___1GTCc prefix___2MSid"
      viewBox="-1 0 37 32"
      height="1em"
      width="1em"
      fill="#686b78"
      {...props}
    >
      <path d="M4.438 0L1.84 5.11 0 31.234h34.909L33.003 5.11 30.406 0z" />
    </svg>
  );
}

const MemoCart = React.memo(Cart);
export default MemoCart;
