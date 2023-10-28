import React, { useState } from "react";
import Routes from "./Routes";
import CustomCursor from "CustomCursor";

function App() {
  const [preLoader,setPreLoader] = useState(true);
  return(
    <>
    <CustomCursor/>
    
    <Routes />

    </>
  );
}

export default App;
