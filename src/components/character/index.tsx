import "./style.css";
import type { CharacterT } from "../../types";

export const Character = (params: { character: CharacterT }) => {
  const { character } = params;

  return (
    <div className="characterContainer">
      <div className="characterDataContainer">
        <p><b>Nombre:</b> {character.name}</p>
        <p><b>Género:</b> {character.gender}</p>
        <p><b>Año nacimiento:</b> {character.birth_year}</p>
      </div>
    </div>
  );
};