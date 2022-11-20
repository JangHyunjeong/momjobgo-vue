import { callApi } from "@/plugins/axios";

export const callSignUp = (data) => {
  return callApi({
    url: `/auth/user/new`,
    method: "POST",
    data,
  });
};

export const callLogin = (data) => {
  return callApi({
    url: `/auth/user`,
    method: "POST",
    data,
  });
};

export const callUserInfo = () => {
  return callApi({
    url: `/api/auth/user`,
    method: "GET",
  });
};
