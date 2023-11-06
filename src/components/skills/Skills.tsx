import { Grid } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import css from "./assets/btm.avif"
import html from "./assets/htmlcss.png"
import javascript from "./assets/jt.png"


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
      <Grid sx={{padding:"1rem",margin:"auto" ,display:"flex", justifyContent:"center", flexDirection:"column", textAlign:"center" }}>
        <h3 style={{}}>
        Skill Set and Technology Focus</h3>
        <Typography> Beginning the quest, merging skills from design to delivery, with a keen focus on front-end innovations.</Typography>
        <Typography sx={{fontSize:"20px",marginTop:"2rem"}}>
          Front End Skills
        </Typography>
      </Grid>
      
      <Grid container xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', marginTop: '1rem', padding: '1rem', justifyContent:'center' }}>

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
            Proficient in HTML and CSS for crafting structured, responsive web pages and ensuring seamless user experiences.
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
            FE Frameworks Or Libraries.
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Skilled in using CSS, Bootstrap, Tailwind, and Material UI to design visually appealing and responsive web interfaces.
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
            Experienced in employing JavaScript, TypeScript, jQuery, and other tools to elevate interactivity and functionality within web applications.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Skills