import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AutoSizer, List } from 'react-virtualized';
import { fetchedAllPokemons } from '../../redux/actions';

function Table() {
  const dispath = useDispatch();
  const {allPokemons, allPokemonsBackup} = useSelector((state) => {
    return {
      allPokemons: state.table.allPokemons,
      allPokemonsBackup: state.table.allPokemonsBackup
    }
  })

  useEffect(() => {
    if (!allPokemonsBackup.length) {
      dispath(fetchedAllPokemons())
    }
  }, [dispath])

  return (
    <div className="table" style={{ width: '100%', height: '70vh' }}>
      <AutoSizer >
        {({width, height}) =>
          <List width={width} height={height} rowHeight={50} rowCount={allPokemons.length} rowRenderer={({ key, index, parent, style }) => {
            const pokemon = allPokemons[index]
            return <Link to={`/pokemons/${pokemon.name}`} className="table__row" key={key} style={style}>{`${index + 1}. ${pokemon.name}`}</Link>
          }} />
        }
      </AutoSizer>
    </div>
  );
}

export default Table;
