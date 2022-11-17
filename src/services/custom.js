import { callApi } from "@/plugins/axios";

export const callPostCustom = (key, data) => {
  return callApi({
    url: `/api/custom/${key}`,
    method: "POST",
    data,
  });
};

export const callGetCustom = (key) => {
  return callApi({
    url: `/api/custom/${key}`,
    method: "GET",
  });
};
