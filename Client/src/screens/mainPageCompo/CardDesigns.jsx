import React, { useContext } from 'react';
import MainPageCardContainer from "../../components/Compo/MainPageCardContainer";
import { UserContext } from '../../Services/UserContext';

function CardDesigns({ isSidebarOpen }) {
  const { adminCodes } = useContext(UserContext);
  const cardDesigns = adminCodes.filter(code => code.sourceCodePath === 'card_design');

  return (
    <div>
      <MainPageCardContainer adminCodes={cardDesigns} isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default CardDesigns;
