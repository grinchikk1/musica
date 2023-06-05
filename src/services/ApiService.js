import axios from "axios";

const getData = async () => {
  const response = await axios.get("data.json");
  return response.data;
};

export default getData;
