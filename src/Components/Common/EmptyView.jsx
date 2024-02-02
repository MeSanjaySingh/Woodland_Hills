import React from "react";

const EmptyView = () => {
  return (
    <div className="emptyView-wrap flex justify-center items-center h-screen">
      <img
        className="max-w-[500px] w-screen"
        src="/images/gif/empty.gif"
        alt="emptyview"
      />
    </div>
  );
};

export default EmptyView;
