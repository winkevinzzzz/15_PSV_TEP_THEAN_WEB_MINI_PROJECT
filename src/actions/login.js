'use server'
import { redirect } from "next/navigation";

async function handleLogin(userInfo) {
  // define structure object
  const newUserInfo = {
    email: userInfo.get("email"),
    password: userInfo.get("password"),
  };
  // calling next auth service and passing " newUseInfo "
  const res = await signIn("credentials", {
    redirect: false,
    ...newUserInfo,
  });  
  if (res.status === 200) {
    return ( 
      <Link href="/todo-list">
        <a>Go to Todo List</a>
      </Link>
    );
  }
    
}