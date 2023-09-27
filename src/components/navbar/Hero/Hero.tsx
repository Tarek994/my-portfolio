import { Grid,Typography } from '@mui/material';
import Button from '@mui/material/Button';


const Hero = () => {
  return (
    <Grid container xs={12} sm={12} md={12} lg={12}
    sx={{
      padding:'1rem',
      borderRadius:'15px',
      width:'100%',
      backgroundColor:'#fff',
      display:'flex',
    }}
    >
      <Grid container xs={12} sm={12} md={6} lg={6} sx={{display:'flex', flexDirection:'column'}}>
          <Typography variant="h4"> Hello World I'm Tarek</Typography>
          <Typography variant='h6'> Front End Developer</Typography>
          <Grid><Button variant="contained">Projects</Button></Grid>
      </Grid>

      <Grid container xs={12} sm={12} md={6} lg={6}>

      </Grid>


    </Grid>
  )
}

export default Hero