import axios from "axios";

const BASE_URL = "https://openapi.naver.com/v1/search/book.json";

export const searchBook = async (query: string) => {
  return await axios.get(BASE_URL, {
    params: { query },
    headers: {
      "X-Naver-Client-Id": "QRRv8prnhwWV6ASRbkGP",
      "X-Naver-Client-Secret": "jXDBX1L0eQ",
    },
  });
};
