import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Pokedex_img from "../assets/img/Pokédex_logo.png";
import { PokemonContex } from "../context/PokemonContex";

const Navigation = () => {
  const context = useContext(PokemonContex)
  

  return (
    <div>
      <header className="container">
        <Link to="/" className="logo">
          <img src={Pokedex_img} alt="pokedex_img" />
        </Link>

        <form action="#">
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
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
              name="search"
              id="search"
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
