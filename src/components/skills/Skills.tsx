import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import css from "./assets/css.png";
import html from "./assets/html.png";
import javascript from "./assets/javascript.png";
import jquery from "./assets/jquery.jpg";
import git from "./assets/git-github.png";
import react from "./assets/react.png";
import agile from "./assets/agile.png";
import wordpress from "./assets/wordpress.png";
import soft from "./assets/soft.jpg";
import bg from "./assets/bg-hero.jpeg";

const Skills = () => {
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
        display: "flex",
        margin: "1rem 0rem",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundColor:"#fff",
        backgroundImage:{bg},

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
          Programing Skills
        </Typography>
      </Grid>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ display: "flex", margin: "1rem 0rem", padding: "1rem", justifyContent: "center" }}
      >
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
              Proficient in HTML for creating structured and responsive web
              pages.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia component="img" alt="CSS" height="140" image={css} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Design and Style
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Accomplished in CSS and adept at utilizing leading design
              frameworks, including Bootstrap, Tailwind CSS, and Material UI, to
              create visually appealing and responsive.
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
              Javascript with Frame Work
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Masterful in <b>JavaScript</b> and <b>Typescript</b> to enhance
              web application interactivity.{" "}
            </Typography>
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
              Skilled in utilizing jQuery to enhance interactivity and
              functionality on web applications.{" "}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={react}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ReactJS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Proficient in <b>ReactJS</b> for dynamic user interfaces and
              experienced in state management.{" "}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={wordpress}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CMS Software
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Skilled in <b>WordPress</b>, specializing in effective content
              management and dynamic website creation.{" "}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* ANOTHER SKILLS */}
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ display: "flex", marginTop: "1rem", padding: "1rem" }}
      >
        <Typography variant="h4" fontWeight={500}>
          Another Skills
        </Typography>
      </Grid>

      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ display: "flex", margin: "1rem 0rem", padding: "1rem", justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia component="img" alt="git" height="140" image={git} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Version Control
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Experienced in leveraging Git and GitHub to streamline
              collaborative development processes.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia component="img" alt="agile" height="140" image={agile} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project Management
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Experienced in <b>Agile</b> project management with a focus on{" "}
              <b>Jira</b> and <b>GitHub</b> for efficient task tracking, issue
              resolution, and streamlined collaboration within software
              development teams.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            alt="softskill"
            height="140"
            image={soft}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Soft Skills
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Versatile professional with strong soft skills, adept in Office
              applications, ERP systems, and effective communication. Proven
              ability to seamlessly navigate diverse tasks, fostering
              collaboration and enhancing operational efficiency.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Skills;
