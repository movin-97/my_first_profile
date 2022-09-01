import React, { useState } from "react";
import Banner from "./Banner";
import SkillsCard from "./SkillsCard";

const HomeComp = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <div className="">
      <Banner/>
    </div>
    <div className="">
      <SkillsCard/>
    </div>

      
    </>
  );
};

export default HomeComp;
