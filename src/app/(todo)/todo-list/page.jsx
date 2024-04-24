import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'
import { getAllWorkspace } from '../../service/workspaces.service'

const todolist = async () => {
  const workSpace = await getAllWorkspace();
  console.log('work space : ',workSpace);

  return (
    <main>
        <div className="flex ">
        <div className=" w-[20%]"><SidebarComponent props={workSpace}/></div>
          <div className="w-[80%]"><NavbarComponent /></div>
          
        </div>
    </main>
  )
}

export default todolist
