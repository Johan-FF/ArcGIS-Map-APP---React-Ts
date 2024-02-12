import { FC, MouseEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Found from "../components/Found";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const HomePage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) navigate("/map");
  }, []);

  const loginHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", "actited");
    }
    navigate("/map");
  };

  const redirectToGitHub = () => {
    window.open(
      "https://github.com/Johan-FF/ArcGIS-Map-APP---React-Ts",
      "_blank"
    );
  };

  return (
    <Found>
      <Card sx={{ width: 550 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/logo_esri_colombia.png"
          title="Logo ArcGIS"
        />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            ArcGIS Map APP
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a personal project created by @Johan-FF on GitHub.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={loginHandler} variant="contained" size="large">
            Start
          </Button>
          <Button onClick={redirectToGitHub} variant="contained" size="large">
            GitHub
          </Button>
        </CardActions>
      </Card>
    </Found>
  );
};

export default HomePage;
