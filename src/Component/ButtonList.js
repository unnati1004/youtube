import React from "react";
import { Button } from "./Button";

const ButtonList = () => {
  const list = ["All","Gaming","Songs","Live","Soccer","Cricket"]
  return (
    <div className="flex">
      {list.map((name)=>(
        <Button name={name}/>
      )) }
    </div>
  );
};

export default ButtonList;
