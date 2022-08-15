import React from 'react';
import { Box, Avatar } from '@mui/material';

function SelectedChampion({champion, imgUrl}) {
    console.log({ champion })
    const img = imgUrl + champion.image.full;

    return (
      <Box>
        <Avatar 
            variant="square"
            sx={{
                width: "120px",
                height: "120px",
            }} 
            src={img} alt={champion.name} 
        />
        {champion.name}
      </Box>
    );
}

export default SelectedChampion;
