"use client";
import React, { useState } from "react";
import Link from 'next/link';

import {
  LayoutTopbar,
  LayoutTopbarLogo,
  LayoutTopbarButton,
  LayoutTopbarWrapper,
  LayoutTopBarMenu
} from "./styles.header";

const AppHeader = () => {

  return (

      <LayoutTopbar >
        <LayoutTopbarLogo href="/">
          <span>SAKAI</span>
        </LayoutTopbarLogo>

        <LayoutTopbarButton type="button" className="p-link layout-menu-button layout-topbar-button">
          <i className="pi pi-bars" />
        </LayoutTopbarButton>


        <LayoutTopBarMenu>
          <LayoutTopbarButton type="button" className="p-link layout-topbar-button">
            <i className="pi pi-calendar"></i>
            <span>Calendar</span>
          </LayoutTopbarButton>
          <LayoutTopbarButton type="button" className="p-link layout-topbar-button">
            <i className="pi pi-user"></i>
            <span>Profile</span>
          </LayoutTopbarButton>
          <Link href="/documentation">
            <LayoutTopbarButton type="button" className="p-link layout-topbar-button">
              <i className="pi pi-cog"></i>
              <span>Settings</span>
            </LayoutTopbarButton>
          </Link>
        </LayoutTopBarMenu>
      </LayoutTopbar>
  );
};

export default AppHeader;
