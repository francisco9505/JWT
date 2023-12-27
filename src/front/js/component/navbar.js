import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { actions } = useContext(Context);

  const logOut = () => {
    actions.setToken("");
    localStorage.setItem("token", "");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <button className="btn btn-primary" onClick={logOut}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
