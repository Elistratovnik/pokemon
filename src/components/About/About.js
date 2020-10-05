import React from 'react';
import { useTrail, animated, config } from 'react-spring';
import '../../sass/About.scss';

function About() {
  const contacts = [{
    type: 'Email',
    contact: 'Elistratovnik@yandex.ru'
  },
  {
    type: 'Phone',
    contact: '+7 (977) 718-14-23'
  },
  {
    type: 'Vk',
    contact: 'https://vk.com/id241193108'
  }
  ]
  const contactTrail = useTrail(contacts.length, {
    to: { opacity: 1, bottom: '0px' },
    from: { opacity: 0, bottom: '-60px' },
    config: config.molasses
  })

  return (
    <section className="about">
      <h2 className="about__title">Елистратов Никита</h2>
      <p className="about__text">В данной работе я использовал React, Redux,
          React-spring(анимации) и  React-virtualized (библиотека для оптимизации больших таблиц)</p>
      <p className="about__text">Буду рад обратной связи!</p>
      <div className="about__contacts">
        {
          contactTrail.map((props, index) => (
            <animated.div style={props} key={index} className="about__contact-container">
              <h3 className=" about__contact-title">{contacts[index].type}</h3>
              <span className=" about__contact-text">{contacts[index].contact}</span>
            </animated.div>
          ))
        }
      </div>
    </section >
  );
}

export default About;
