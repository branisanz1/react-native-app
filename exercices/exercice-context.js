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
    var inArray = false;
    for (var i = 0, len = velibsFavorites.length; i < len; i++) {
      if (velibsFavorites[i]["name"] === station.name) {
        inArray = true;
        break;
      }
    }
    if (inArray == false) {
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
  }

  function delVelibToFav(name) {
    console.log(name);
    var index = false;
    for (var i = 0, len = velibsFavorites.length; i < len; i++) {
      if (velibsFavorites[i]["name"] === name) {
        index = i;
        break;
      }
    }
    console.log(velibsFavorites);

    console.log(velibsFavorites);
    if (index != false) {
      velibsFavorites.splice(index, 1);
      console.log(velibsFavorites);

      setVelibFavorites([...velibsFavorites, velibsFavorites]);
    }
  }

  return (
    <VelibContext.Provider
      value={{ velibs, velibsFavorites, addVelibToFav, delVelibToFav }}
    >
      {children}
    </VelibContext.Provider>
  );
};
