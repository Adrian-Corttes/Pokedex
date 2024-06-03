import React, { useContext } from "react";
import { PokemonContex } from "../context/PokemonContex";

const FilterBar = () => {
  const { active } = useContext(PokemonContex);

  return (
    <div className={`container-filters ${active ? 'active' : ''}`}>
      <div className="filter-by-type">
        <span>Tipo</span>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="grass"
            id="grass"
          />
          <label htmlFor="grass">Planta</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="fire"
            id="fire"
          />
          <label htmlFor="fire">Fuego</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="bug"
            id="bug"
          />
          <label htmlFor="bug">Bicho</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="fairy"
            id="fairy"
          />
          <label htmlFor="fairy">Hada</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="dragon"
            id="dragon"
          />
          <label htmlFor="dragon">Dragón</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="shadow"
            id="shadow"
          />
          <label htmlFor="shadow">Fantasma</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="ground"
            id="ground"
          />
          <label htmlFor="ground">Tierra</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="normal"
            id="normal"
          />
          <label htmlFor="normal">Normal</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="psychic"
            id="psychic"
          />
          <label htmlFor="psychic">Psíquico</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="steel"
            id="steel"
          />
          <label htmlFor="steel">Acero</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="dark"
            id="dark"
          />
          <label htmlFor="dark">Siniestro</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="electric"
            id="electric"
          />
          <label htmlFor="electric">Eléctrico</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="fighting"
            id="fighting"
          />
          <label htmlFor="fighting">Lucha</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="flying"
            id="flying"
          />
          <label htmlFor="flying">Volador</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="ice"
            id="ice"
          />
          <label htmlFor="ice">Hielo</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="poison"
            id="poison"
          />
          <label htmlFor="poison">Veneno</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="rock"
            id="rock"
          />
          <label htmlFor="rock">Roca</label>
        </div>

        <div class="group-type">
          <input
            type="checkbox"
            //onChange={handleCheckBox}
            className="water"
            id="water"
          />
          <label htmlFor="water">Agua</label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
