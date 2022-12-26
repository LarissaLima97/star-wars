import axios from "axios";

export const getPeopleList = (page) => {
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/people/?page=${page}`
  );
};
