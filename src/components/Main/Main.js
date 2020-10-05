import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import CardsList from '../CardsList/CardsList';
import Pokemon from '../Pokemon/Pokemon';
import PokemonsTable from '../PokemonsTable/PokemonsTable';

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route exact path='/' component={CardsList}/>
        <Route exact path='/pokemons' component={PokemonsTable}/>
        <Route path='/about' component={About}/>
        <Route path='/pokemons/:id' component={Pokemon}/>
      </Switch>
    </main>
  );
}

export default Main;
