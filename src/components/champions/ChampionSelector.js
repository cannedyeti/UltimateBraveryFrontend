import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/ContextProvider';
import { Box, Grid, TextField, Button } from '@mui/material';
import ChampionIcon from './ChampionIcon';

function ChampionSelector(props) {
    const [champs, setChamps] = useState({});
    const [filteredChamps, setFilteredChamps] = useState({});

    const LEAGUE_CHAMPION_API = `http://ddragon.leagueoflegends.com/cdn/${props.patch}/data/en_US/champion.json`;
    const CHAMPION_ICON_URL = `http://ddragon.leagueoflegends.com/cdn/${props.patch}/img/champion/`;

    useEffect(() => {
        getChampions();
    }, []);

    async function getChampions() {
        const champsObj = await fetch(LEAGUE_CHAMPION_API)
            .then(res => res.json())
            .then(json => json.data)
        setChamps(champsObj)
        setFilteredChamps(champsObj)
    }

    function filterChamps(search) {
        const fChamps = Object.filter(champs, champ => champ.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredChamps(fChamps)
    }

    Object.filter = (obj, predicate) => Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {} );


    function handleSearch(event) {
        filterChamps(event.target.value)
    }

    function handleClear() {
        document.getElementById("searchChampions").value = '';
        setFilteredChamps(champs)
    }

    return (
      <Box>
        <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
                This is content
            </Grid>
            <Grid item xs={12} md={4}>
                <Box sx={{
                    marginBottom: "1rem",
                    width: "100%",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <TextField sx={{
                            width: "100%",
                            marginRight: "8px"
                        }} 
                        placeholder="Search.."
                        variant="standard" 
                        onChange={handleSearch}
                        id="searchChampions"
                    />
                    <Button variant='contained' onClick={handleClear}>
                        Clear
                    </Button>
                </Box>
                <Grid container spacing={1}>
                    {Object.keys(filteredChamps).map((key) =>  (
                        <Grid item xs={3} md={2} key={champs[key].name}>
                            <ChampionIcon champion={champs[key]} imgUrl={CHAMPION_ICON_URL} />
                        </Grid>
                    ))}
                </Grid> 
            </Grid>
        </Grid>
      </Box>
    );
  }

export default ChampionSelector;
