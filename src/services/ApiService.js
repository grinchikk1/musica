import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "../redux/Action";

const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("data.json");
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export default fetchData;