import axios from "axios";

const pathAuth = "https://api-hello.vercel.app/auth/";
const pathAuthGitHub = "https://api.github.com/users/";

export function getUserGitHub(userId) {
  return axios.get(`${pathAuthGitHub}${userId}`).then((res) => {
    return res.data;
  });
}

export function getUserReposGitHub(userId) {
  return axios
    .get(`https://api.github.com/users/${userId}/repos`)
    .then((res) => {
      return res.data;
    });
}

export function getByUser(userId) {
  return axios.get(`${pathAuth}${userId}`).then((res) => {
    return res.data;
  });
}

export function postUser(user) {
  return axios.post(`${pathAuth}sing-up`, user).then((res) => {
    return res.data;
  });
}
