import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { FiHome, FiBox, FiDollarSign, FiStar, FiPhone } from "react-icons/fi";
import "./app-sidebar.css";

const items = [
  { title: "Home", to: "/about", icon: FiHome },
  { title: "Services", to: "/services", icon: FiBox },
  { title: "Prices", to: "/prices", icon: FiDollarSign },
  { title: "Testimonials", to: "/testimonies", icon: FiStar },
  { title: "Contact Us", to: "/contact", icon: FiPhone },
];

export const AppSidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon" side="left" data-testid="sidebar">
      <SidebarHeader>
        <div className="brand">
          <span className="brand-mark">🎵</span>
          <span className="brand-name">Mix to Haven</span>
        </div>
      </SidebarHeader>

      {/* Divider for visual separation */}
      <div className="sidebar-divider" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive =
                  pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link to={item.to} className="menu-link" title={item.title}>
                        <item.icon className="menu-icon" />
                        <span className="menu-label">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="footer-note">v1.0</div>
      </SidebarFooter>
    </Sidebar>
  );
};
