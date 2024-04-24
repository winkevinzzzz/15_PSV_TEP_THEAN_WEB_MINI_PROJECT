"use client"

import { DeleteWorkspace } from "@/actions/workspace"

export const DeleteButton = ({ id }) => 

<button onClick={() => DeleteWorkspace(id)}>Delete</button>