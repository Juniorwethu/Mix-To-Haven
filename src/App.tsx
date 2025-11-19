import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LandingPage from "./landing page";
import AboutUs from "./about us";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import "./sidebar.css";
import Services from "./services";
import Prices from "./prices.tsx";
import Testimonies from "./testimonies";
import Contact from "./contact";

const App: React.FC = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  if (isLanding) {
    // no sidebar on landing
    return (
      <>
        {/* ...no sidebar here... */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about us" element={<Navigate to="/about" replace />} />
        </Routes>
      </>
    );
  }

  // sidebar visible on all other routes
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about us" element={<Navigate to="/about" replace />} />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default App;
