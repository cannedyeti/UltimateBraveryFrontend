import React, { useContext } from 'react';
import ChampionSelector from '../components/champions/ChampionSelector';
import { Context } from '../context/ContextProvider';

function Home() {
    const { patch } = useContext(Context);

    return (
      <>
        <main>
          <h2>League shit</h2>
          <p>Hello Mr Doodert</p>
          {patch ? <ChampionSelector patch={patch} /> : null }
        </main>
      </>
    );
}

export default Home;
