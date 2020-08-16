import { POST } from "../utils/http";
import md5 from "js-md5";
const api = {
  login: "/api/user/login",
};

interface LoginParams {
  username: string;
  password: string;
}

export function login(params: LoginParams) {
  let form = {
    username: params.username,
    password: md5(params.password),
  };
  return POST(api.login, form);
}
