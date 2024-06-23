import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Pokedex_img from "../assets/img/Pokédex_logo.png";

const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate("/search", { state: valueSearch });

    onResetForm();
  };

  return (
    <div>
      <header className="container">
        <Link to="/" className="logo">
          <img src={Pokedex_img} alt="pokedex_img" />
        </Link>

        <form onSubmit={onSearchSubmit}>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-searc"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Nombre del pokemon"
            ></input>
          </div>
          <button className="btn-search">Buscar</button>
        </form>
      </header>

      <Outlet />
    </div>
  );
};

export default Navigation;
