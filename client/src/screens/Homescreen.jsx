import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza.jsx";
import { getAllPizzas } from "../actions/pizzaActions.js";

function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
    console.log(dispatch);
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something get wrong</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <Pizza pizza={pizza} />          
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
