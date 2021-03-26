import http from "axios";
import { newAccountType } from "../types/account.types";

const addUserService = async (userInfo: newAccountType) => {
  await http
    .post("/api/addUser", {
      id: userInfo.id,
      password: userInfo.password,
      nickName: userInfo.nickName,
      birthDate: userInfo.birthDate || "",
      email: userInfo.email || "",
      phoneNumber: userInfo.phoneNumber || "",
    })
    .then((res) => {
      if (res.data) {
        return true;
      }
    });

  return false;
};

const getIdCheck = async () => {};

export { addUserService, getIdCheck };
