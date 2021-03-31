import http from "axios";
import { newAccountType } from "../types/account.types";
import CryptoJS from "crypto-js";

const AUTH_KEY = "todolist-made-by-sg";

const addUserService = async (userInfo: newAccountType) => {
  const encrypted = CryptoJS.AES.encrypt(userInfo.password, AUTH_KEY);
  const userData = { ...userInfo, password: encrypted.toString() };

  await http
    .request({
      method: "POST",
      url: "/api/checkUser",
      data: {
        id: userInfo.id,
      },
    })
    .then((res) => {
      if (!res.data) {
        return false;
      }
    });

  // await http
  //   .post("/api/addUser", {
  //     id: userData.id,
  //     password: userData.password,
  //     nickName: userData.nickName,
  //     birthDate: userData.birthDate || "",
  //     email: userData.email || "",
  //     phoneNumber: userData.phoneNumber || "",
  //   })
  //   .then((res) => {
  //     if (res.data) {
  //       return true;
  //     }
  //   });

  // return false;
};

const getIdCheck = async () => {};

export { addUserService, getIdCheck };
