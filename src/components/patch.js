import React, { useState, useEffect, useContext } from 'react';
import { API } from 'aws-amplify';
import { listPatches } from '../graphql/queries';
import { createPatch } from '../graphql/mutations';
import { Context } from '../context/ContextProvider';

const LEAGUE_VERSION_API = 'https://ddragon.leagueoflegends.com/api/versions.json';

function Patch() {
    const { patch, setPatch } = useContext(Context);
    
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
        await API.graphql({ query: createPatch, variables: { input: { patchNumber: patch } } });
    }
    
    async function getNewestPatchNumber() {
        const patch = await fetch(LEAGUE_VERSION_API)
            .then(res => res.json())
            .then(json => json[0])
        return patch;
    }

    return (
        <>
            Current patch: {patch}
        </>
    );
} 

export default Patch;
