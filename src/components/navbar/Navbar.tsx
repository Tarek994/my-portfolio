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
            maxWidth={'100%'}
            sx={{ p: 2, backgroundColor: '#caf0f8',
            marginBottom:'1rem',
            display:'flex',
            justifyContent:'center',
            textAlign:'center',
            }}>

            <Grid xs={12} md={11} lg={11}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    justifyItems: 'center',
                    alignItems: 'center',
                    alignContent: "center",
                    margin: '0rem 1rem',
                    padding:'0rem 2rem',
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
                    <Grid lg={6} sm={6}>
                        <Tabs
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <LinkTab
                            style={{ backgroundColor: '#fff', borderRadius: '10px',marginRight:'5px' }}
                            label="About" href='/#' />
                            <LinkTab
                                  style={{ backgroundColor: '#fff', borderRadius: '10px',marginRight:'5px'  }}
                            label="Services" href='/#/services' />
                            <LinkTab 
                                  style={{ backgroundColor: '#fff', borderRadius: '10px' }}
                            label="Projects" href='/#/projects' />
                        </Tabs>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default Navbar;


// eslint-disable-next-line no-lone-blocks
{/* import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem
} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'

export const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar position='static' color='transparent'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button
            color='inherit'
            id='resources-button'
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleClick}>
            Resources
          </Button>
          <Button color='inherit'>Login</Button>
        </Stack>
        <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          MenuListProps={{
            'aria-labelledby': 'resources-button'
          }}>
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
} */}