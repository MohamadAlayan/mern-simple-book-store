import React from 'react';
import {Box, Typography} from "@mui/material";

const AboutPage = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography sx={{fontFamily: "fantasy"}} variant={"h2"}>
                This is MERN CRUD Application
            </Typography>
        </Box>
    );
};

export default AboutPage;