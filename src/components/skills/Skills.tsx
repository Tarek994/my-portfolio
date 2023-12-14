import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import css from "./assets/css.png"
import html from "./assets/html.png"
import javascript from "./assets/javascript.png"
import jquery from "./assets/jquery.jpg"
import git from "./assets/git-github.png"
import react from "./assets/react.png"
import agile from "./assets/agile.png"
import wordpress from "./assets/wordpress.png"
import soft from "./assets/soft.jpg"





const Skills = () => {
  return (
    <Grid container xs={12} sm={12} md={12} lg={12}
      sx={{
        padding: '1rem',
        borderRadius: '15px',
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        margin: '1rem 0rem'
      }}
    >
      <Grid container xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', marginTop: '1rem', padding: '1rem' }}>
        <Typography variant="h4" fontWeight={500}>Programing Skills</Typography>
      </Grid>
      <Grid container xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', margin: '1rem 0rem', padding: '1rem' }}>

        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={html}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              HTML
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Proficient in HTML for creating structured and responsive web pages.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="CSS"
            height="140"
            image={css}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Design and Style
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Accomplished in CSS and adept at utilizing leading design frameworks, including Bootstrap, Tailwind CSS, and Material UI, to create visually appealing and responsive.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={javascript}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Javascript
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Proficient in using JS to enhance interactivity and functionality on web applications.        </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={jquery}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              jquery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Proficient in using JS to enhance interactivity and functionality on web applications.        </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', marginTop: '1rem', padding: '1rem' }}>
        <Typography variant="h4" fontWeight={400}>Another Skills</Typography>
      </Grid>
      <Grid container xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', margin: '1rem 0rem', padding: '1rem' }}>



        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="CSS"
            height="140"
            image={css}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CSS/3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Proficient in CSS for designing visually appealing and responsive web interfaces.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={javascript}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Javascript
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Proficient in using JS to enhance interactivity and functionality on web applications.        </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={jquery}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              jquery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Proficient in using JS to enhance interactivity and functionality on web applications.        </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Skills