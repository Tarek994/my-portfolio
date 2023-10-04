import { Grid } from '@mui/material';
import Skills from "../skills/Skills"

const Services = () => {
  
    return (
        <Grid container xs={12} sm={12} md={12} lg={12}
            sx={{
                padding: '1rem',
                borderRadius: '15px',
                width: '100%',
                backgroundColor: '#fff',
                display: 'flex',
            }}>

            <Grid xs={12} sm={12} md={6} lg={6}>

            </Grid>


            <Grid xs={12} sm={12} md={6} lg={6} sx={{display:'flex',textAlign:'center',justifyContent:'center',alignContent:'center'}}>
                <Skills/>
            </Grid>


        </Grid>
    )
}

export default Services