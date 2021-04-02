import http from "axios";
import { loginCheckType, newAccountType } from "../types/account.types";
import CryptoJS from "crypto-js";

const AUTH_KEY = "todolist-made-by-sg";
const DATA_SALT = "don't-hack plz";

const addUserService = async (userInfo: newAccountType | string) => {
  console.log(userInfo);
  if (typeof userInfo !== "string") {
    const encrypted = CryptoJS.AES.encrypt(`{"pin": "${DATA_SALT}", "date": ${Date.now()}, "data": "${userInfo.password}"}`, AUTH_KEY);
    const userData = { ...userInfo, password: encrypted.toString() };
    await http
      .post("/api/addUser", {
        id: userData.id,
        password: userData.password,
        nickName: userData.nickName,
        birthDate: userData.birthDate || "",
        email: userData.email || "",
        phoneNumber: userData.phoneNumber || "",
      })
      .then((res) => {
        if (res.data) {
          return true;
        }
      });

    return false;
  }
};

const newAccountIdCheck = async (data: Pick<newAccountType, "id">): Promise<newAccountType | string> => {
  return await http
    .request({
      method: "POST",
      url: "/api/newAccountIdCheck",
      data: {
        id: data.id,
      },
    })
    .then((res) => {
      if (res.data === true) {
        return data;
      } else {
        return res.data;
      }
    });
};

const loginAccountCheck = async (userInfo: loginCheckType): Promise<loginCheckType | boolean> => {
  return await http
    .request({
      method: "POST",
      url: "/api/loginAccountCheck",
      data: {
        id: userInfo.id,
        password: userInfo.password,
      },
    })
    .then((res) => {
      if (res.data) {
        return true;
      } else {
        return false;
      }
    });
};

export { addUserService, newAccountIdCheck, loginAccountCheck };
