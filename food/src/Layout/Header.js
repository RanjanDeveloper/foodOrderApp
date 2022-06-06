import React, {Fragment} from "react";
import classes from './Header.module.css'
import mealsImg from '../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
    return(
       <Fragment>
           <header className={classes.header}>
               <h1>Food Order</h1>
               <HeaderCartButton />
           </header>
           <div className={classes['main-image']}>
               <img src={mealsImg} alt="fruits on the table"/>
           </div>
       </Fragment>
    ) 
}
export default Header