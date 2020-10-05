import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemon } from '../../redux/actions';
import '../../sass/Pokemon.scss'

function Pokemon(props) {
  const dispatch = useDispatch()
  const pokemon = useSelector((state) => {
    return state.cards.pokemon
  })

  useEffect(() => {
    dispatch(loadPokemon(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`))
  }, [props.match.params.id, dispatch])

  return (
    <article className="pokemon">
      <img src={pokemon.image} alt="pokemon avatar" className="pokemon__image" ></img>
      <ul className="pokemon__description">
        <li className="pokemon__char">{`Имя: ${pokemon.name}`}</li>
        <li className="pokemon__char">{`Вес: ${pokemon.weight} кг`}</li>
        <li className="pokemon__char">{`Рост: ${pokemon.height} дюймов`}</li>
        <li className="pokemon__char">{`Тип: ${pokemon.type}`}</li>
      </ul>
    </article>
  );
}

export default Pokemon;
