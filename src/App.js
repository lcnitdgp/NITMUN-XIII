import React, { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import "./styles/index.scss";
import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {

  return (
    <Layout>
      <AnimatedRoutes
      />
    </Layout>
  );
}

export default App;
