import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      fontSize: "30px",
      color: "white",
      backgroundColor: "darkMagenta",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root)}>
      <CardContent>Weathered</CardContent>
    </Card>
  );
};
