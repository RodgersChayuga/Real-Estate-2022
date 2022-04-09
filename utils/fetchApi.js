import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "dfc6ad1c81mshd34ee6e92c3f38ap1de39djsn60d8db14d47d",
    },
  });

  return data;
};
