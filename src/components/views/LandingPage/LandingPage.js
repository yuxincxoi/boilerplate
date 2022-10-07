import axios from "axios";
import React, { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello");
  }, []);
  return <div>LandingPage</div>;
}

export default LandingPage;
