import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, TextField, Button, Snackbar, Alert as MuiAlert  } from '@mui/material';
import ChampionIcon from './ChampionIcon';
import SelectedChampion from './SelectedChampion';

function ChampionSelector(props) {
    const [champs, setChamps] = useState({});
    const [filteredChamps, setFilteredChamps] = useState({});
    const [selectedChampion, setSelectedChampion] = useState(null);
    const [selectedChampionArray, setSelectedChampionArray] = useState([]);
    const [error, setError] = useState('');

    const LEAGUE_CHAMPION_API = `https://ddragon.leagueoflegends.com/cdn/${props.patch}/data/en_US/champion.json`;
    const CHAMPION_ICON_URL = `https://ddragon.leagueoflegends.com/cdn/${props.patch}/img/champion/`;

    useEffect(() => {
        getChampions();
    }, []);

    async function getChampions() {
        const champsObj = await fetch(LEAGUE_CHAMPION_API)
            .then(res => res.json())
            .then(json => json.data)
        setChamps(champsObj)
        setFilteredChamps(champsObj)
        setSelectedChampionArray(convertObjToArray(champsObj))
    }

    function filterChamps(search) {
        const fChamps = Object.filter(champs, champ => champ.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredChamps(fChamps)
    }

    Object.filter = (obj, predicate) => Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {} );

    function convertObjToArray(obj) {
        return Object.keys(obj).map(key => (obj[key]))
    }

    function handleSearch(event) {
        filterChamps(event.target.value)
    }

    function handleClear() {
        document.getElementById("searchChampions").value = '';
        setFilteredChamps(champs)
    }

    function updateSelectedChampArray(champ, champArray) {
        let newArr = champArray || [];
        if(champArray.includes(champ)) {
            const remove = champArray.indexOf(champ)
            newArr.splice(remove, 1)
        } else {
            newArr.push(champ)
        }
        console.log({newArr})
        setSelectedChampionArray(newArr)
    }

    function handleClearSelectedChampions() {
        setSelectedChampionArray([])
    }

    function handleSelectAllChampions() {
        setSelectedChampionArray(convertObjToArray(champs))
    }

    function handleRunThatUltimateBraveryShit() {
        if(selectedChampionArray.length) {
            setSelectedChampion(selectedChampionArray[Math.floor(Math.random()*selectedChampionArray.length)])
        } else {
            setSelectedChampion(null)
            setError("Please select a champion")
        }
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setError('');
    };

    return (
      <Box>
        <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
                {selectedChampion ? <SelectedChampion imgUrl={CHAMPION_ICON_URL} champion={selectedChampion} /> : null }
            </Grid>
            <Grid item xs={12} md={4}>
                <Button 
                    sx={{
                        width: "100%",
                        marginBottom: "1rem"
                    }}
                    variant='contained'
                    onClick={() => handleRunThatUltimateBraveryShit()}
                >
                    Send it
                </Button>
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
                <Box sx={{
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Button sx={{
                        flex: "0 1 48%"
                    }}
                        variant='contained'
                        onClick={() => handleClearSelectedChampions()}
                        >
                        Remove all champs
                    </Button>
                    <Button 
                        sx={{
                            flex: "0 1 48%"
                        }}
                        variant='contained'
                        onClick={() => handleSelectAllChampions()}
                        >
                        Select all champs
                    </Button>
                </Box>
                <Grid container spacing={1}>
                    {Object.keys(filteredChamps).map((key) =>  (
                        <Grid item xs={3} md={2} key={champs[key].name}>
                            <ChampionIcon champion={champs[key]} imgUrl={CHAMPION_ICON_URL} onClick={() => updateSelectedChampArray(champs[key], selectedChampionArray)} champArr={selectedChampionArray} />
                        </Grid>
                    ))}
                </Grid> 
            </Grid>
        </Grid>
        <Snackbar
            open={error ? true : false}
            autoHideDuration={5000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ "horizontal": "center", "vertical": "bottom" }}
        >
            <MuiAlert elevation={6} variant="filled" severity="error">{error}</MuiAlert>
        </Snackbar>
      </Box>
    );
  }

export default ChampionSelector;
