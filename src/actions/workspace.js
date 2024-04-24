'use server'
import { deleteWorkspace, postWorkspace } from "@/app/service/workspaces.service";
import { revalidateTag } from "next/cache";


// add new post Workspace
async function addWorkspace(userInfo) {
   'use server'
  // define structure object
  const newUserInfo = {
    workspaceName: userInfo.get("workspaceName"),
  };
  console.log("newuserinfor",newUserInfo)
  // call Registerservice
   await postWorkspace(newUserInfo);
  revalidateTag("workspaceName")
}
export default addWorkspace;
//  delete Workspace
export const DeleteWorkspace = async (id) => {
  await deleteWorkspace(id);
  revalidateTag('workspacedel')
}