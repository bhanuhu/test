
import AppsIcon from '@mui/icons-material/Apps';
import { Box, Stack, Typography } from "@mui/material";
import Create from "../Create/Create";

const Homepage = () => {
  return (
    <Box sx={{backgroundColor:'black' ,height:'100%',width:'100%' ,position:'absolute'}} >
      <header >
       <Stack direction='row' sx={{p:"1%"}}>
        <AppsIcon sx={{color:'white' , fontSize:'3rem' }}/>
        <Typography variant='h6'  sx={{color:'white',m:'.5%'}}>ANONYMOUS</Typography>
        </Stack>
      </header>
     <Create/>
    </Box>
  );
};

export default Homepage;