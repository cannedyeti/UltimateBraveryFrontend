import React from 'react';
import { Avatar } from '@mui/material'

function ChampionIcon(props) {
    const imgUrl = props.imgUrl + props.champion.image.full;
    return (
      <>
        <Avatar 
            variant="square"
            sx={{
                width: "100%",
                height: "100%"
            }} 
            src={imgUrl} alt={props.champion.name} 
        />
      </>
    );
  }

export default ChampionIcon;
