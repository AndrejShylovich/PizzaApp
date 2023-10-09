import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza.jsx";
import { getAllPizzas } from "../actions/pizzaActions.js";
import Loading from "../components/Loading.js";
import Error from "../components/Error.js";

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
          <Loading/>
        ) : error ? (
          <Error error="Something went wrong"/>
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
