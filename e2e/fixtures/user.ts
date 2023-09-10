import { IUser } from "../interfaces/user";

export const validUser: IUser = {
  username: "atta",
  password: "123456",
  errorMessage: "",
};

const incorrectPasswordUser: IUser = {
  username: "atta",
  password: "12345678",
  errorMessage: "ล็อกอินหรือรหัสผ่านไม่ถูกต้อง",
};

const suspendedUser: IUser = {
  username: "jomyut",
  password: "123456",
  errorMessage: "ล็อกอินถูกระงับ",
};

export const invalidUsers: IUser[] = [incorrectPasswordUser, suspendedUser];
