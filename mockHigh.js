import Axios from "axios";

export const fetchData = () => {
  return Axios.get("/").then(res => res.data);
};

export const getNumber = () => {
  return 123;
};
