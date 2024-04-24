'use server'
import { redirect } from "next/navigation";

const { registerService } = require("@/app/service/auth.service");

// define handle login
async function handleRegister(userInfo) {
   
  // define structure object
  const newUserInfo = {
    firstname: userInfo.get("firstname"),
    lastname: userInfo.get("lastname"),
    gender: userInfo.get("gender"),
    email: userInfo.get("email"),
    password: userInfo.get("password"),
  };
  // call Registerservice
  console.log("first", newUserInfo);
  const res = await registerService(newUserInfo);
console.log("responseRegister",res)
  // checking is Register success nor not
  if (res.status === 200) {
    redirect("/login")
  }
}
export default handleRegister;
