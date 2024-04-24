'use client'

import { handleUpdateWorkspace } from "@/app/actions/workspaceAction"

export const UpdateWorkspaceButton = ({ id }) => <button onClick={() => handleUpdateWorkspace(id)}>Update</button>