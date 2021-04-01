export type newAccountType = {
  id: string;
  password: string;
  nickName: string;
  birthDate?: string | "";
  email?: string | "";
  phoneNumber?: string | "";
};

export type loginCheckType = {
  id: string;
  password: string;
};
