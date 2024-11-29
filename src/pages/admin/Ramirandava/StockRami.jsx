import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import TvaleMagasin from "../../../components/table/TvaleMagasin";
import TableVitrine from "../../../components/table/TableVitrine";
import TableTiko from "../../../components/table/TableTiko";
import { useStock } from "../../../context/StockContext";

export default function StockRami() {
  const { setStockage, stockage, getStockTiko,getStockVitrine,getStockMagasin } = useStock();

  // Fonction pour vérifier si le bouton est actif
  const isActive = (type) => stockage === type;

  useEffect(()=>{
    getStockMagasin()
  },[])

  return (
    <div className="bg-white shadow-lg p-8">
      <h1 className="text-gray-700 text-2xl mb-5">Listes des stocks</h1>
      {/* Boutons */}
      <div className="flex  items-center space-x-4 mb-6">
        <button
          className={`px-6 py-2 rounded font-semibold ${
            isActive("magasin")
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => {setStockage("magasin");getStockMagasin()}}
        >
          Stocks Magasin
        </button>
        <button
          className={`px-6 py-2 rounded font-semibold ${
            isActive("vitrine")
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() =>{ setStockage("vitrine");getStockVitrine()}}
        >
          Stocks Vitrine
        </button>
        <button
          className={`px-6 py-2 rounded font-semibold ${
            isActive("tiko")
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => {
            setStockage("tiko");
            getStockTiko();
          }}
        >
          Stocks TIKO
        </button>
      </div>
      {/* Recherche */}
      <div className="flex justify-between items-center mb-6">
        <div className="search flex items-center  p-2 rounded w-full max-w-md">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher"
            className="pl-2 outline-none flex-grow text-secondary text-md placeholder:text-gray-500 placeholder:text-sm"
          />
        </div>
      </div>

      {/* Contenu */}
      <div className="mt-5">
        {stockage === "magasin" && <TvaleMagasin />}
        {stockage === "vitrine" && <TableVitrine />}
        {stockage === "tiko" && <TableTiko />}
      </div>
    </div>
  );
}
