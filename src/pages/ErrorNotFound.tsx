import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ErrorNotFoundPage: FC = () => {
  const navigate = useNavigate();

  const redirectToMap = () => {
    navigate("/map");
  };

  return (
    <Layout>
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Oops... Page not found.
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={redirectToMap} size="small">
            Go to map
          </Button>
        </CardActions>
      </Card>
    </Layout>
  );
};

export default ErrorNotFoundPage;
