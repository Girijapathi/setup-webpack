import React, {Component} from 'react';

// import components
import PizzaImage from '../Component/PizzaImage/PizzaImage';

class Pizza extends Component{
    render(){
        return(
            <div>
                <h1>Pizza mania</h1>
                <PizzaImage/>
            </div>
            
        );
    }
}

export default Pizza;