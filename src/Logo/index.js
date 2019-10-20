import React from "react";
import logo from "./logo.svg";
import logoWhite from "./logo-white.svg";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  "@keyframes slide-in-blurred-left": {
    "0%": {
      transform: "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
      "transform-origin": "100% 50%",
      filter: "blur(40px)",
      opacity: 0
    },
    "100%": {
      transform: "translateX(0) scaleY(1) scaleX(1)",
      "transform-origin": "50% 50%",
      filter: "blur(0)",
      opacity: 1
    }
  },
  logo: {
    animation:
      "$slide-in-blurred-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both 0.3s"
  }
});

export const Logo = withStyles(styles)(({ white, animated, classes }) => {
  return (
    <img
      className={animated && classes.logo}
      src={white ? logoWhite : logo}
      width="156"
      alt="Logo"
    />
  );
});
