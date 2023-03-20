import React from "react";
import Accueil from "../../../img/fleurs_accueil.jpg";

const Bandeau = () => {
  return (
    <div className="w-full relative">
      <img
        className="max-h-screen w-full object-cover object-bottom"
        src={Accueil}
        alt="fleurs poétiques dans le vent à la campagne"
      />
      <div className="absolute w-full top-40 py-3 inset-x-0 text-center leading-4">
        <h1 className="text-6xl body-font font-Yeseva m-5">Wonderflower</h1>
        <p className="text-3xl m-5">Bienvenue chez nous</p>
        <button
          id="button"
          type="submit"
          class="bg-pink-900 shadow hover:bg-pink-700 text-white font-bold rounded-full p-3 w-40"
        >
          Notre collection
        </button>
      </div>
    </div>
  );
};

export default Bandeau;