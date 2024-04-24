import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import headerToken from "../api/headerToken";

const session = await getServerSession(authOption);
console.log("session ",session?.user?.token)

export const getAllWorkspace = async (userInfo) => {
    const header = await headerToken()
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
      headers: header
    });
    const data = await res.json();
    // console.log("data ", data)
    return data;
  };

//   http://110.74.194.123:8989/api/todo/v1/workspaces

export const postWorkspace = async ({workspaceName}) => {
    const header = await headerToken();
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
    next :{tags:['workspaceName']},
    method: "POST",
    body: JSON.stringify(workspaceName),
      headers: header
    });
    const data = await res.json();
    console.log("data after ", data)
    return data;
  };

  // delete  Workspace
  export const deleteWorkspace = async (id) => {
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspaces/${id}`, {
        next: { tags: ['workspacedel'] },
        method: "DELETE",
        headers: header
    })
    console.log("res,",res)
}