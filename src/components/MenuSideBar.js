import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
  } from "cdbreact";
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';

function MenuSideBar() {
  return (
    <div>
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" >
              <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                ADMIN
              </CDBSidebarHeader>
              <CDBSidebarContent>
                <CDBSidebarMenu>
                    <Link to='/'>
                     
                  <CDBSidebarMenuItem icon="th-large">
                  DashBoard
                  </CDBSidebarMenuItem>
                    </Link>
                  <CDBSidebarMenuItem icon="sticky-note">
                  <Link to='ware-house'>
                  WareHouse
                    </Link>
                  </CDBSidebarMenuItem>
                  <Link to='delivery'>
                  <CDBSidebarMenuItem icon="credit-card" iconType="solid">
                  Delivery
                  </CDBSidebarMenuItem>
                    </Link>
                </CDBSidebarMenu>
              </CDBSidebarContent>
              <CDBSidebarFooter style={{ textAlign: "center" }}>
                <div
                  className="sidebar-btn-wrapper"
                  style={{ padding: "20px 5px" }}
                >
                  Sidebar Footer
                </div>
              </CDBSidebarFooter>
            </CDBSidebar>
    </div>
  )
}

export default MenuSideBar