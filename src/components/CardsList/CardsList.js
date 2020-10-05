import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import '../../sass/CardsList.scss'
import { fetchedCards, resetCards } from '../../redux/actions';
import Welcome from '../Welcome/Welcome';

function CardsList() {
  const dispatch = useDispatch();
  const cardsRef = useRef();
  const offsetRef = useRef(0);
  const { pokemons, loading, greetingsOpen, pokemonAddCount } = useSelector((state) => {
    return {
      pokemons: state.cards.pokemons,
      loading: state.cards.loading,
      greetingsOpen: state.app.greetingsOpen,
      pokemonAddCount: state.cards.pokemonAddCount
    }
  })

  useEffect(() => {
    if (cardsRef.current.getBoundingClientRect().height < window.innerHeight && !greetingsOpen) {
      LoadNextCards()
    }
  }, [pokemons, greetingsOpen])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      dispatch(resetCards())
    }
  }, [])

  const LoadNextCards = () => {
    dispatch(fetchedCards(pokemonAddCount, offsetRef.current))
    offsetRef.current = offsetRef.current + pokemonAddCount
  }

  const handleScroll = () => {
    const { height, top } = cardsRef.current.getBoundingClientRect()
    if (Math.round(height) === window.innerHeight - top - 48) {
      LoadNextCards()
    }
  }

  return (
    <section ref={cardsRef} className="cards">
      {greetingsOpen && <Welcome LoadNextCards={LoadNextCards} />}
      {
        pokemons.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))
      }
    </section>
  );
}

export default CardsList;
