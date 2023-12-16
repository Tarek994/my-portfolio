import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import Hero from '../../components/Hero/Hero';
import Services from '../../components/services/Services';
import Skills from "../../components/skills/Skills"

const Container = () => {
  return (
    <Grid container xs={12} md={12} lg={12}
      sx={{ backgroundColor: '#003049', padding: '1rem 0rem' }}
    >
      <Grid container xs={11} sm={11} md={11} lg={11}
        sx={{ maxWidth: 'lg', margin: 'auto' }}
      >
        <Hero />

        <Skills />

      </Grid>
    </Grid>
  )
}

export default Container