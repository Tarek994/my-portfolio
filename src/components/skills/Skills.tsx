import { Grid } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Skills = () => {
  return (
    <Grid container xs={12} sm={12} md={12} lg={12}
    sx={{
      padding: '1rem',
      borderRadius: '15px',
      width: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      margin:'1rem 0rem'
    }}
  >
    <Grid container xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem', padding: '1rem' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  </Grid>
  )
}

export default Skills