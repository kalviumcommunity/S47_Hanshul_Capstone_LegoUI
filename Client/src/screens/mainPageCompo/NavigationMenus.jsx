import React from "react";
import MainPageCardContainer from "../../components/Compo/MainPageCardContainer";
import img from "../../assets/landscape-1.png"
function NavigationMenus({isSidebarOpen}) {
  const cards = [
    { image: img, title: "Card 1", btnpath: "" },
    { image: img, title: "Card 2", btnpath: "" },
    { image: img, title: "Card 3", btnpath: "" },
    { image: img, title: "Card 4", btnpath: "" },
    { image: img, title: "Card 5", btnpath: "" },
    { image: img, title: "Card 6", btnpath: "" },
    { image: img, title: "Card 6", btnpath: "" },

  ];
  return (
    <div>
      <MainPageCardContainer cards={cards} isSidebarOpen={isSidebarOpen}/>
    </div>
  );
}

export default NavigationMenus;
