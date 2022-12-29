import axios from "axios";

const BASE_URL = "https://swapi.dev/api"

export const getPeopleList = async (page) => {
  const res = await(
    axios.get(
    `${BASE_URL}/people/?page=${page}`
    )
  );
  return res.data
};

export const getPerson = async (id) => {
  const res = await(
    axios.get(
      `${BASE_URL}/people/${id}`
    )
  );
  return res.data
}

export const getStarShip = async (id) => {
  const res = await(
    axios.get(
      `${BASE_URL}/starships/${id}`
    )
  );
  return res.data
}