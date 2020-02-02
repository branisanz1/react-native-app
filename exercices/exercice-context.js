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

  function addVelibToFav(station) {
    setVelibFavorites([
      ...velibsFavorites,
      {
        name: station.name,
        geo: station.geo,
        nbbike: station.nbbike,
        nbebike: station.nbebike,
        creditCard: station.creditCard,
        dist: station.dist,
        record_timestamp: station.date
      }
    ]);
  }
  return (
    <VelibContext.Provider value={{ velibs, velibsFavorites, addVelibToFav }}>
      {children}
    </VelibContext.Provider>
  );
};
