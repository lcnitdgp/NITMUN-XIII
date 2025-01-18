import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import Gallery from "./Gallery";
import Register from "./Register";
import { AnimatePresence } from 'framer-motion';
import EventsPage from "../layouts/Layout1";
import GalleryPage from "../layouts/Layout2";
import HomePage from "../layouts/Layout0";
import RegisterPage from "../layouts/Layout3";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
