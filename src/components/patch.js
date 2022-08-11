import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listPatches } from '../graphql/queries';
import { createPatch } from '../graphql/mutations';

const LEAGUE_VERSION_API = 'https://ddragon.leagueoflegends.com/api/versions.json';

function Patch() {
    const [patch, setPatch] = useState("");
    
    useEffect(() => {
        fetchPatch();
      }, []);

    async function fetchPatch() {
        const { data } = await API.graphql({ query: listPatches });
        let patches = data.listPatches.items;
        let newestPatch = await getNewestPatchNumber()
        if(!patches[0] || patches[0].patchNumber !== newestPatch) {
            updatePatch(newestPatch);
        }  
        setPatch(newestPatch)
    }

    async function updatePatch(patch) {
        const apiData = await API.graphql({ query: createPatch, variables: { input: { patchNumber: patch } } });
        console.log({apiData})
    }
    
    async function getNewestPatchNumber() {
        const patch = await fetch(LEAGUE_VERSION_API)
            .then(res => res.json())
            .then(json => json[0])
        return patch;
    }

    return (
        <>
            <h1>Patch</h1>
            <div>
                {patch}
            </div>
        </>
    );
}

export default Patch;
