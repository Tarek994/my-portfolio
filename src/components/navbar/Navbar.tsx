import Grid from '@mui/material/Unstable_Grid2';
import Tabs from '@mui/material/Tabs';
import LinkTab from '@mui/material/Tab';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";



const Navbar = () => {
    const handleChange = (e: any) => {
        console.log(e)
    }
    return (
        <Grid
            container
            xs={12}
            md={12}
            maxWidth={'xl'}
            sx={{ p: 2, backgroundColor: '#bde0fe',
            marginBottom:'1rem',
            }}>

            <Grid xs={12} md={11} lg={11}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    justifyItems: 'center',
                    alignItems: 'center',
                    alignContent: "center",
                    margin: 'auto',
                    padding:'0rem 1rem',
                }}
                maxWidth={'lg'} >

                <Grid xs={6} md={2}>
                    <Box>
                        <Typography sx={{

                            fontSize: {
                                xs: 22,
                            },
                            fontFamily: 'ADLaM Display',
                            fontWeight: 800,
                        }}>
                            Tarek Ghali
                        </Typography>
                    </Box>
                </Grid>

                <Grid
                    container
                    xs={6}
                    md={10}
                    justifyContent="flex-end"
                    justifyItems="center"
                    alignContent="center"
                >
                    <div>
                        <Tabs
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <LinkTab label="About" href='/#' />
                            <LinkTab label="Services" href='/#/services' />
                            <LinkTab label="Projects" href='/#/projects' />
                        </Tabs>
                    </div>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default Navbar;
