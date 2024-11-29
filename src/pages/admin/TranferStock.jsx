import { PlusCircleIcon } from 'lucide-react'
import React from 'react'
import { useFournisseur } from '../../context/FournisseurContext';
import AjoutApprovisionnement from '../../components/modal/fournisseur/AjoutApprovisionnement';
import { useAdmin } from '../../context/AdminContext';

export default function TranferStock() {
    const {setOpen,listApproRami,setLieu} =  useFournisseur()
    const { app, setApp } = useAdmin();
  return (
    <>
      <div className="poste flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-secondary text-gray-700 text-2xl ">
          Liste des stocks transférés
          </span>
          <div className="nombre ml-2 w-8 h-5 bg-gray-200 rounded-full flex justify-center items-center ">
            <span className="text-xs text-primary font-semibold"></span>
          </div>
        </div>
        <div className="add_employe">
        {
            app=="toils" ?    <button className="flex items-center btn-primary" onClick={()=>{setOpen(true);setLieu("tranfertToiles")}}>
            <PlusCircleIcon className="w-5 h-5 text-white" />
            <span className="text-md pl-1">Transfert de stocks</span>
          </button> :     <button className="flex items-center btn-primary" onClick={()=>{setOpen(true);setLieu("tranfertRami")}}>
            <PlusCircleIcon className="w-5 h-5 text-white" />
            <span className="text-md pl-1">Transfert de stocks</span>
          </button>
        }
        </div>
      </div>
      <AjoutApprovisionnement/>
    </>
  )
}
