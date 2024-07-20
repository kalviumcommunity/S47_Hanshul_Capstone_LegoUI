import React, { useContext } from 'react';
import MainPageCardContainer from "../../components/Compo/MainPageCardContainer";
import { UserContext } from '../../Services/UserContext';

function CardDesigns({ isSidebarOpen }) {
  const { adminCodes } = useContext(UserContext);
  const Designs = adminCodes.filter(code => code.sourceCodePath === 'landing_design');

  return (
    <div>
      <MainPageCardContainer adminCodes={Designs} isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default CardDesigns;
