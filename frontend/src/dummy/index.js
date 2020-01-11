import data from "./data.json";

function getPlaces(regionId) {
  let items = data.spots.filter(item => regionId == item.regionId);
  return items;
}

export default {
  getPlaces
};
