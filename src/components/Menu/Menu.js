import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated, useChain, useTransition } from 'react-spring';
import '../../sass/Menu.scss'

function Menu() {
  const [open, setOpen] = useState(false)
  const mobile = window.innerWidth < 1024 ? '100%' : '40%'

  const menuItems = [
    { title: 'Главная', path: '/', id: '0' },
    { title: 'Покемоны', path: '/pokemons', id: '1' },
    { title: 'Автор', path: '/about', id: '2' },
  ]

  const MenuRotateRef = useRef();
  const menuRotate = useSpring({
    ref: MenuRotateRef,
    transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
    from: { transform: 'rotate(-90deg)' },
    config: { duration: 100 }
  })

  const MenuOpenRef = useRef();
  const menuOpen = useSpring({
    ref: MenuOpenRef,
    width: open ? mobile : '0%',
  })

  const showMenuItemsRef = useRef();
  const showMenuItems = useTransition(open ? menuItems : [], item => item.title, {
    ref: showMenuItemsRef,
    unique: true,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: [{ opacity: 0, transform: 'scale(1)' }, { opacity: 1, transform: 'scale(1)' }],
    leave: { opacity: 0, transform: 'scale(0)' },
    config: { duration: 300 }
  })

  useChain(open ? [MenuRotateRef, MenuOpenRef, showMenuItemsRef] : [showMenuItemsRef, MenuRotateRef, MenuOpenRef], [0, open ? 0.1 : 0.3])

  return (
    <animated.div style={{ ...menuRotate, ...menuOpen }} className="menu" onMouseEnter={() => { setOpen(true) }} onMouseLeave={() => { setOpen(false) }}>
      {
        showMenuItems.map(({ item, props }) => {
          return <animated.div style={props} key={item.id}><NavLink className="menu__link" to={item.path} style={props}>{item.title}</NavLink></animated.div>
        })
      }
    </animated.div>
  );
}

export default Menu;
