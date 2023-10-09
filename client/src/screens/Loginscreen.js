import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

function Loginscreen() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginState = useSelector(state=>state.loginUserReducer)
  const {error , loading, success} = loginState

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('currentUser')){
      window.location.href = '/'
    }
  }, [])

  function login(){
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5 ">
        {loading && <Loading/>}
        {success && <Success success="User logged successfully"/>}
        {error && <Error error="Something went wrong"/>}
        <h2 className="text-center mt-2" style={{ fontSize: "35px" }}>
          Login
        </h2>
        <div>
          <input
            type="text"
            placeholder="email"
            className="form-control"
            value={email}
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button onClick={login} className="btn mt-2 mb-2">
            Login
          </button>
          <a className="nav-link m-2" href="/register">
            Click here to register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
