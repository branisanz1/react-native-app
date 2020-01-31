import React, { useState, createContext, useEffect } from "react";
import { fetchVelibs } from "./exercice6";

export const VelibContext = createContext({});

export const VelibProvider = ({ children }) => {
  const [velibs, setVelibs] = useState([]);
  const [velibsFavorites, setVelibFavorites] = useState([]);

  const [location, setLocation] = useState([]);
  useEffect(() => {
    fetchVelibs().then(data => {
      setVelibs(data);
    });
  }, []);

  function addVelibToFav(name, geo, nbbike, nbebike, creditCard, dist) {
    console.log(name);
    setVelibFavorites([
      ...velibsFavorites,
      {
        name: name,
        geo: geo,
        nbbike: nbbike,
        nbebike: nbebike,
        creditCard: creditCard,
        dist: dist
      }
    ]);
  }
  return (
    <VelibContext.Provider value={{ velibs, velibsFavorites, addVelibToFav }}>
      {children}
    </VelibContext.Provider>
  );
};
