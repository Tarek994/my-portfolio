import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import hero from './assets/hero.svg';
import bg from  './assets/bg-hero.jpeg';

const Hero = () => {
  return (
    <Grid container xs={12} sm={12} md={12} lg={12}
      sx={{
        padding: '1rem',
        borderRadius: '15px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundColor:"#fff",
        backgroundImage:{bg},
        display: 'flex',
        margin:'1rem 0rem'
      }}
    >
      <Grid container xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', padding: '1rem' }}>
        <Typography variant="h4">Front End Developer</Typography>
        <Typography variant='h6' sx={{ marginTop: '1rem' }}>Dedicated web enthusiast and adaptable collaborator, with over 18 months of expertise primarily in Front-end and JavaScript domains. Committed to fostering personal and team development, supported by a history of achievements.#WebDevelopment #Teamwork. </Typography>
        <Grid sx={{display:"flex"}}>
          <Button variant="contained" sx={{ marginTop: '1rem', marginRight: "5px" }}>Projects</Button>
          <Button variant="contained" sx={{ marginTop: '1rem', marginRight: "5px" }}>Experience</Button>
        </Grid>
      </Grid>

      <Grid container xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex', marginTop: '1rem', padding: '1rem' }}>
        <img style={{ width:"100%" }} src={hero} alt="" />
      </Grid>


    </Grid>
  )
}

export default Hero