import  React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "./Loader.css";
import Gallery from "../pages/Gallery";

const GalleryPage = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4500);
    }, []);
    return (
        <div className="App">
          {loading ? (
            <div className="ring-style">
              <Loader loading={loading} /> {/* use your custom loader */}
            </div>
          ) : (
            <Gallery/>
          )}
        </div>
      );
    };
  
  export default GalleryPage;