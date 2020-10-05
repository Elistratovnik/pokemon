import React from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated, config } from 'react-spring';
import { hideGreetings } from '../../redux/actions';
import '../../sass/Welcome.scss';

function Welcome({LoadNextCards}) {
  const dispath = useDispatch()

  const clicklHandler = () => {
    dispath(hideGreetings())
    LoadNextCards()
  }

  const welcomeTextEffect = useSpring({
    from: {opacity: 0, transform: 'translateY(-100%)'},
    to: {opacity: 1,  transform: 'translateY(0%)'},
    config: config.wobbly
  })

  return (
    <animated.div className="welcome" style={welcomeTextEffect}>
      <h1 className="welcome__title">PokemonWorld</h1>
      <p className="welcome__subtitle">Добро пожаловать! Меня Зовут Елистратов Никита и этот сайт - тестовое задание для компании "Blitz_Studio"</p>
      <p className="welcome__subtitle">Для навигации изпользуйте "покебол" в верхнем-левом углу экрана</p>
      <button className="welcome__button" onClick={clicklHandler}>погнали</button>
    </animated.div>
  );
}

export default Welcome;
