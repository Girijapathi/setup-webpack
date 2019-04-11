import React from 'react';
import classes from './PizzaImage.css';
import PizzaImage from './../../assets/yummy-pizza.jpg';
const pizzaImage = (props) => {
    <div className={classes.pizzaImage}>
        <img src={PizzaImage} className={classes.PizzaImg}></img>
    </div>

};
export default pizzaImage;