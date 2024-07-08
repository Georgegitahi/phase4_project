import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LayoutAdmin() {
  return (
    <div>
        <h1>Admin Navbar</h1>
{/* components */}

<Outlet />

<div>
    Footer
</div>
    </div>
  )
}
