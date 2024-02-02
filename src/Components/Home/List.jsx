import ListItem from "./ListItem";
import React from "react";

const List = ({ list }) => {
  return (
    <div className="list-wrap grid grid-cols-3 gap-[2rem]">
      {list.map((item) => (
        <ListItem key={item.id} itema={item} />
      ))}
    </div>
  );
};

export default List;
