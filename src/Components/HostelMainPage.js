import React from 'react'
import Navbar from './Navbar'
import HostelPage from './HostelPage'
import "./HostelMainPage.css"
function HostelMainPage() {
  return (
    <div>
      <Navbar className="navbar"></Navbar>
      <HostelPage className="page"></HostelPage>
    </div>
  )
}

export default HostelMainPage
