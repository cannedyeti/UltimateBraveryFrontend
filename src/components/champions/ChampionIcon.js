import React, { useState } from 'react';
import { Avatar } from '@mui/material'

function ChampionIcon({ champArr, imgUrl, champion, onClick }) {
    const [isSelected, setIsSelected] = useState(champArr.includes(champion));
    const img = imgUrl + champion.image.full;

    function handleOnClick() {
      onClick();
      setIsSelected(!isSelected);
    }

    return (
      <>
        <Avatar 
            variant="square"
            sx={{
                width: "100%",
                height: "100%",
                filter: champArr.includes(champion) ? "grayscale(0%)" :  "grayscale(100%)"
            }} 
            src={img} alt={champion.name} 
            onClick={() => handleOnClick()}
        />
      </>
    );
  }

export default ChampionIcon;
