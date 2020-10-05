import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/Card.scss'

function Card({ pokemon }) {
  const { name, url } = pokemon;
  const [img, setImage] = useState('')
  const [id, setId] = useState(0)

  useEffect(() => {
      async function fetchData() {
        const response = await fetch(url)
        const json = await response.json()
        setImage(json.sprites.front_default)
        setId(json.id)
      }
      fetchData()
  }, [url])

  return (
    <Link to={`/pokemons/${id}`} className="card">
      <div className="card__image" style={{ backgroundImage: `url(${img})` }}></div>
      <h3 className="card__title">{name}</h3>
    </Link>
  );
}

export default Card;
