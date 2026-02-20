import { useEffect, useState } from "react";
import { api } from "./api/api";
import "./App.css";
import { Character } from "./components/character";
import type { CharacterT } from "./types";

const App = () => {
  const [characters, setCharacters] = useState<CharacterT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("/people/");  
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  useEffect(() => {
    api.get(url).then((res) => { 
        setCharacters((prev) => [...prev, ...res.data.results]);
        setNextUrl(res.data.next);
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message : e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="mainContainer">
      <h1>PERSONAJES STAR WARS</h1>

      {loading && <h1>Loading...</h1>}
      {error && <h2>{error}</h2>}

      <div className="charactersContainer">
        {characters.map((c, idx) => (
          <Character key={idx} character={c} />
        ))}
      </div>

      {nextUrl && (
        <div className="paginationContainer">
          <button onClick={() => setUrl(nextUrl)}>
            Siguiente Página
          </button>
        </div>
      )}

    </div>
  );

};

export default App;
