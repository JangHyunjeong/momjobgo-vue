import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.devcury.kr",
});

export const callApi = (config) => {
  const token = "???";
  const baseHeaders = {};
  const headers = token
    ? { ...baseHeaders, Authorization: `Bearer ${token}` }
    : { ...baseHeaders };

  return instance({
    headers: headers,
    ...config,
  });
};


// ... 전개구문
// 클론 되나, 주소값이 다르다. 
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax