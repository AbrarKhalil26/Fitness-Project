import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import Banner from '../assets/images/banner.png';


const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        mb="23px"
        mt="30px"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
          textTransform: "capitalize",
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>

      <Button
        variant="contained"
        color='error'
        sx={{ backgroundColor: "#FF2625", padding: "10px" }}
        href="#exercises"
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercises
      </Typography>

      <img src={Banner} alt="Banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner
