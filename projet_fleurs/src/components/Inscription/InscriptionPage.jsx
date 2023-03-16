import React from "react";
import SignupForms from "./Inscription-components/InscriptionForms";
import InscriptionHeader from "./Inscription-components/InscriptionHeader";

const InscriptionPage = () => {
  return (
    <div id="inscription" className="flex flex-col">
        <InscriptionHeader />
        <SignupForms />
    </div>
  );
};

export default InscriptionPage;
