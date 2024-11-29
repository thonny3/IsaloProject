import React, { useState } from "react";

export default function Modal({ open, onClose, children, width, height }) {
  const [allowClose, setAllowClose] = useState(false); // Gère si le clic extérieur ferme la modale

  return (
    <div
      onClick={() => {
        if (allowClose) onClose();
      }}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      style={{
        backgroundColor: open ? "rgba(0, 0, 0, 0.5)" : "transparent",
        backdropFilter: open ? "blur(5px)" : "none", // Ajoute l'effet flou
        WebkitBackdropFilter: open ? "blur(5px)" : "none", // Support pour Safari
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: width, height: height }}
        className={`bg-white shadow px-6 py-2 rounded-lg transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          className="absolute top-2 right-2 p-1 rounded-lg text-2xl text-gray-500 hover:text-red-600"
          onClick={onClose}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
}
