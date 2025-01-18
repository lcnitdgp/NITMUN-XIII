import  React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "./Loader.css";
import Home from "../pages/Home";

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3500);
    }, []);
    return (
        <div className="App">
          {loading ? (
            <div className="ring-style">
              <Loader loading={loading} /> {/* use your custom loader */}
            </div>
          ) : (
            < Home />
          )}
        </div>
      );
    };
  
  export default HomePage;