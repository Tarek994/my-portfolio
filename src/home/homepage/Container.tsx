import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";

const Container = () => {
  return (
    <Grid container xs={12} md={12} lg={12}
      sx={{ backgroundColor: '#bde0fe', }}
    >
      <Grid container xs={11} sm={11} md={11} lg={11}
        sx={{ maxWidth: 'lg', margin: 'auto', backgroundColor: '#bfe', padding: '1rem' }}
      >


      </Grid>
    </Grid>
  )
}

export default Container