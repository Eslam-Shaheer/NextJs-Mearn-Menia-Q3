"use client";
import React from "react";
import ReactLoading from "react-loading";

const loading = () => {
  return (
    <div className="loading">
      <ReactLoading type={"balls"} color={"red"} height={"5%"} width={"5%"} />
    </div>
  );
};

export default loading;
