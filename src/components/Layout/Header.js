import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'

import classes from './Header.module.css'
const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onShowCart={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='' />
        </div>
    </React.Fragment>
  )
}

export default Header