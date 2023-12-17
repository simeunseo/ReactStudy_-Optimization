import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import { useState } from "react";

function Parent() {
  const [forFirstChild, setForFirstChild] = useState(null);

  const handleClick = () => {
    setForFirstChild("변경된 값");
  };

  return (
    <>
      <FirstChild value={forFirstChild} />
      <SecondChild onClick={handleClick} />
    </>
  );
}

export default Parent;
