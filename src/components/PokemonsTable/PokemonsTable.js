import React from 'react';
import Table from '../Table/Table';
import '../../sass/Table.scss'
import '../../sass/PokemonsTable.scss'
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchValue, searchPokemon } from '../../redux/actions';

function PokemonsTable() {
  const dispatch = useDispatch()
  const value = useSelector((state) => {
    return state.table.searchInput
  })

  const searchHandler = (e) => {
    dispatch(changeSearchValue(e.currentTarget.value))
  }

  const searchButtonHandler = () => {
    dispatch(searchPokemon())
  }

  return (
    <section className="pokemons-table">
        <input className="pokemons-table__search" type='text' value={value} onChange={searchHandler}></input>
        <button className="pokemons-table__button" onClick={searchButtonHandler}>искать</button>
        <Table/>
    </section>
  );
}

export default PokemonsTable;
