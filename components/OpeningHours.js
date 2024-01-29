"use client";

const OpeningHours = () => {
  return (
    <div className="bg-transparent w-[20vw] mx-24 mb-24">
      <h2 className="text-lg font-semibold mb-8 text-black">Horaires</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-between">
          <p className="text-darkGrey">Lundi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Mardi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Mercredi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Jeudi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Vendredi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Samedi</p>
          <p className="text-darkGrey">Fermé</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Dimanche</p>
          <p className="text-darkGrey">Fermé</p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
