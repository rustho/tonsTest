import axios from "axios";

export const fetchTonRate = async () => {
  const response = await axios.get(
    "https://api.ston.fi/v1/assets/0:0000000000000000000000000000000000000000000000000000000000000000"
  );
  return parseFloat(response.data.asset.dex_usd_price);
};

export const fetchTsTonRate = async () => {
  const response = await axios.get(
    "https://api.ston.fi/v1/assets/0:bdf3fa8098d129b54b4f73b5bac5d1e1fd91eb054169c3916dfc8ccd536d1000"
  );
  return parseFloat(response.data.asset.dex_usd_price);
};
