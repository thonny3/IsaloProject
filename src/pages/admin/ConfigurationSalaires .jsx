import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const ConfigurationSalaires = () => {
  const configurations = [
    { type: "Date mensuel de paiement", valeur: "-", pourcentage: "-", datePaiement: "9 de chaque mois", part: "-" },
    { type: "Transport", valeur: "20 000 Ar", pourcentage: "-", datePaiement: "-", part: "-" },
    { type: "Allocation repas", valeur: "200 000 Ar", pourcentage: "-", datePaiement: "-", part: "-" },
    { type: "Carte", valeur: "80 000 Ar", pourcentage: "-", datePaiement: "-", part: "-" },

  ];
  const [type,setType] =  useState(null)

  return (
    <div className="flex space-x-8 p-3">
      {/* Tableau des configurations */}
      <div className="w-2/3 bg-white p-3">
        <h2 className="text-xl font-bold mb-4">Salaire</h2>
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Part</th>
              <th className="border border-gray-300 px-4 py-2">Valeur</th>
              <th className="border border-gray-300 px-4 py-2">Pourcentage</th>
              <th className="border border-gray-300 px-4 py-2">Date de Paiement</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {configurations.map((config, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{config.type}</td>
                <td className="border border-gray-300 px-4 py-2">{config.part}</td>
                <td className="border border-gray-300 px-4 py-2">{config.valeur}</td>
                <td className="border border-gray-300 px-4 py-2">{config.pourcentage}</td>
                <td className="border border-gray-300 px-4 py-2">{config.datePaiement}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulaire de configuration */}
      <div className="bg-white p-6 rounded-lg shadow h-fit" >
        <h2 className="text-xl font-bold mb-4">Ajouter une nouvelle Configuration</h2>
        <form className="space-y-4 py-3">
          <div>
            <label className="block text-sm font-medium mb-1">Nom*</label>
            <select onChange={((e)=>setType(e.target.value))} className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="">Sélectionner</option>
              <option value={2}>Date  de paiement</option>
              <option value={0}>Avance</option>
            </select>
          </div>

          {
            type==2  && (<div>
              <label className="block text-sm font-medium mb-1">Date*</label>
              <input
                type="number"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Ex : 9 du  mois "
              />
            </div>)
          }
        
{
            type==0  && (<div>
              <label className="block text-sm font-medium mb-1">Valeur*</label>
              <input
                type="number"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Montant"
              />
            </div>)
          }



          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfigurationSalaires;
