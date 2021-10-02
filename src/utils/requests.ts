import axios from 'axios';
import qs from 'qs';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
export const LOGIN_URL = '/oauth/token'

type LoginData = {
  username: string,
  password: string
}

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';

const basicHeader = () => `Basic ${window.btoa(CLIENT_ID+':'+CLIENT_SECRET)}`;

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: basicHeader()
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password'
  });

  return axios({method: 'POST', baseURL: BASE_URL, url: LOGIN_URL, data, headers});
}