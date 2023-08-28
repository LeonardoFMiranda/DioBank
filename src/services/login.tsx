import { api } from "./api";

export const login = async (email: string, password:string): Promise<boolean> => {
  const data: any = await api;
  console.log("login", data);

  if (email === data.email && password === data.password) {
    return true; 
  }
  return false;
};
