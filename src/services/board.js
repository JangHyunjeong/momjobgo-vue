import { callApi } from "@/plugins/axios";

export const getBoards = (contentsInclude) => {
  return callApi({
    url: "/api/board",
    method: "GET",
    contentsInclude,
  });
};

export const postBoards = (data) => {
  return callApi({
    url: "/api/board",
    method: "POST",
    data,
  });
};

export const getBoard = (bno) => {
  return callApi({
    url: `/api/board/${bno}`,
    method: "GET",
  });
};

export const deleteBoard = (bno) => {
  return callApi({
    url: `/api/board/${bno}`,
    method: "DELETE",
  });
};

export const updateBoard = (data) => {
  return callApi({
    url: `/api/board`,
    method: "PATCH",
    data,
  });
};
