import http from "axios";
import { loginCheckType, newAccountType } from "../types/account.types";
import CryptoJS from "crypto-js";

const AUTH_KEY = "todolist-made-by-sg";
const DATA_SALT = "don't-hack plz";

const addUserService = async (userInfo: newAccountType | string) => {
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
  } else {
    switch (userInfo) {
      case "errCode-01":
        return "이미 존재하는 아이디 입니다.";
    }
  }
};

const newAccountIdCheck = async (data: string): Promise<boolean | string> => {
  if (data === "" || data === undefined || data === null) {
    return "errCode-02";
  }
  return await http
    .request({
      method: "POST",
      url: "/api/newAccountIdCheck",
      data: {
        id: data,
      },
    })
    .then((res) => {
      if (res.data) {
        return true;
      } else {
        return "errCode-01";
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
