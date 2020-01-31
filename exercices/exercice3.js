import { AsyncStorage } from "react-native";

export const get = async url => {
  const key = encodeURIComponent(url);
  try {
    const response = await fetch(url);
    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
    const responseJson = await response.json();
    const records = responseJson.records;
    const data = JSON.stringify(records);
    AsyncStorage.setItem(key, data);
    return records;
  } catch (error) {
    console.warn(error);

    const result = await AsyncStorage.getItem(key);
    return result;
  }
};

export const getCoordinate = async url => {
  const key = "getCoordinateStations";
  try {
    const response = await fetch(url);
    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
    const responseJson = await response.json();
    const records = responseJson.records;
    const StationCoordinate = records.map(record => ({
      geo: record.fields.geo,
      name: record.fields.station_name,
      dist: Math.round(record.fields.dist),
      nbbike: record.fields.nbbike,
      nbebike: record.fields.nbbike,
      creditcard: record.fields.creditcard,
      recordTimestamp: record.record_timestamp
    }));
    return StationCoordinate;
  } catch (error) {
    console.warn(error);
    const result = await AsyncStorage.getItem(key);
    return result;
  }
};
