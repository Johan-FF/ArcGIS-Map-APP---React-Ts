import { FC } from "react";

import { Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Footer: FC = () => {
  return (
    <Box>
      <CardContent>
        <Typography
          id="shine"
          sx={{ fontSize: 14, position: "relative" }}
          color="text.secondary"
          gutterBottom
        >
          ArcGIS Map APP
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Footer;
