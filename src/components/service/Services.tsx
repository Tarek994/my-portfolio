import { Grid, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{
        padding: "1rem",
        borderRadius: "15px",
        width: "100%",
        backgroundColor: "#d3d3d3",
        display: "flex",
      }}
    >
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ display: "flex", marginTop: "1rem", padding: "1rem" }}
      >
        <Typography variant="h4" fontWeight={500}>
          Service
        </Typography>
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          textAlign: "start",
          justifyContent: "center",
          alignContent: "start",
        }}
      >
        <ServiceCard />
      </Grid>
    </Grid>
  );
};

export default Service;
