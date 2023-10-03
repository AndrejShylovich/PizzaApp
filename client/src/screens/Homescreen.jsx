import React from 'react';
import pizzas from '../pizzasdata.js';
import Pizza from '../components/Pizza.jsx';


function Homescreen() {
    return (
        <div>
            <div className="row">
                {pizzas.map(pizza => {
                    return <div className="col-md-4">
                            <Pizza pizza={pizza}/>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Homescreen;