import * as React from "react";

function Search(props) {
  return (
    <svg
      className="prefix___1GTCc"
      viewBox="5 -1 12 25"
      height="1em"
      width="1em"
      fill="#686b78"
      {...props}
    >
      <path d="M17.667 17.14l5.058 5.057L20.923 24l-5.219-5.219a10.15 10.15 0 01-5.507 1.614C4.566 20.395 0 15.829 0 10.197 0 4.566 4.566 0 10.197 0c5.632 0 10.198 4.566 10.198 10.197 0 2.682-1.035 5.122-2.728 6.942zm-7.47.705a7.648 7.648 0 100-15.296 7.648 7.648 0 000 15.296z" />
    </svg>
  );
}

const MemoSearch = React.memo(Search);
export default MemoSearch;
