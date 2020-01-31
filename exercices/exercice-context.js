import React, { useState, createContext, useEffect } from "react";
import { fetchVelibs } from "./exercice6";

export const VelibContext = createContext({});

export const VelibProvider = ({ children }) => {
  const [velibs, setVelibs] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetchVelibs().then(data => {
      setVelibs(data);
    });
  }, []);
  return (
    <VelibContext.Provider value={velibs}>{children}</VelibContext.Provider>
  );
};
