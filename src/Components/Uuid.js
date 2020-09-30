import React from "react";

const Uuid = () => {
 return "xxxxxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx".replace(/[xy]/g, (c) => {
  const r = (Math.random() * 16) | 0,
   v = c === "x" ? r : (r & 0x3) | 0x8;
  return v.toString(16);
 });
};
export default Uuid;
