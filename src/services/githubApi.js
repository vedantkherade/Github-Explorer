import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (query, page = 1, config = {}) => {
  const res = await axios.get(
    `${BASE_URL}/search/users?q=${query}&page=${page}&per_page=30`,
    config
  );
  return res.data;
};

export const getUserRepos = async (username) => {
  const res = await axios.get(
    `${BASE_URL}/users/${username}/repos`
  );
  return res.data;
};