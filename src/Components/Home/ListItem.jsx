import React from "react";

const ListItem = ({
  itema: { coverSrc, title, price, deliveryFee, serviceTime, rating },
}) => (
  <div className="listItem-wrap ">
    <img
      src={coverSrc}
      alt=""
      className="w-full rounded-[.7rem] h-[200px] object-cover"
    />
    <header className="flex justify-between m-3 items-center">
      <h4>{title}</h4>
      <span className="text-base font-bold  items-center flex rounded-md">
        {rating} ⭐
      </span>
    </header>
    <footer className="text-base  flex justify-between items-center">
      <p>
        <b className="mr-2">{serviceTime}</b>
        Delivery Fee
        <span className="text-[rgb(0,0,0)]  font-bold">${deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;
