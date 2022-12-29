import axios from "axios";

const BASE_URL = "https://swapi.dev/api"

export const getPeopleList = async (page) => {
  const res = await(
     axios.get(
    `${BASE_URL}/people/?page=${page}`
  ));
  return res.data
};
