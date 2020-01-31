import { getCoordinate } from "./exercice3";

export const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      resolve(position);
    }, reject);
  });
};

export const fetchVelibs = async () => {
  const position = await getPosition().catch(error => console.log(error));
  const url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=50&geofilter.distance=${position.coords.latitude},${position.coords.longitude},10000`;
  return getCoordinate(url);
};
