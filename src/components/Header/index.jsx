import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import {Img} from '../Img/index'
import DrawerComp from "./Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    
    <React.Fragment>
      <AppBar sx={{ background: "#fff"}}>
        <Toolbar>
          <Link to='/'><Img
            src="images\img_ellipse28.png"
            sx={{ transform: "scale(2)" }}
            className={" h-[60px]"}
          /></Link>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                WEU Foundation
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
              <Link to="/orchestra" className="text-black-900">  <Tab label="Orchestra" /></Link>
              <Link to="/community" className="text-black-900"> <Tab label="Community" /></Link> 
              <Link to="/about" className="text-black-900"> <Tab label="About Us" /></Link> 
               <Link to="/generations" className="text-black-900"> <Tab label="Generations" /></Link>
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;