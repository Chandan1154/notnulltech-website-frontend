import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";


import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Technology from "../pages/Technology";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import ApplyJob from "../pages/careers/ApplyJob";
import NotFound from "../pages/NotFound";


export default function AppRoutes() {
  return (

      <Routes>
        <Route element={<MainLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />


          Protected Route
          <Route
            path="/careers/:jobId/apply"
            element={
     
                <ApplyJob />

            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

  );
}