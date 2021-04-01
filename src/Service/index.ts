import http from "axios";
import { loginCheckType, newAccountType } from "../types/account.types";
import CryptoJS from "crypto-js";

const AUTH_KEY = "todolist-made-by-sg";

const addUserService = async (userInfo: newAccountType | boolean) => {
  if (typeof userInfo !== "boolean") {
    const encrypted = CryptoJS.AES.encrypt(userInfo.password, AUTH_KEY);
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

const newAccountIdCheck = async (userInfo: newAccountType): Promise<newAccountType | boolean> => {
  return await http
    .request({
      method: "POST",
      url: "/api/newAccountIdCheck",
      data: {
        id: userInfo.id,
      },
    })
    .then((res) => {
      if (res.data === true) {
        return userInfo;
      } else {
        return false;
      }
    });
};

const loginAccountCheck = async (userInfo: loginCheckType): Promise<loginCheckType | boolean> => {
  const encrypted = CryptoJS.AES.encrypt(userInfo.password, AUTH_KEY);
  const userData = { ...userInfo, password: encrypted.toString() };

  return await http
    .request({
      method: "POST",
      url: "/api/loginAccountCheck",
      data: {
        id: userData.id,
        password: userData.password,
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
