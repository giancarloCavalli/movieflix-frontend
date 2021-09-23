import "./styles.css";

const MoviesList = () => {
  return (
    <div className="movies-list-container">
      <h2>Tela de listagem de filmes</h2>

      <div className="movies-list-list">
        <div className="movies-list-item"><a href="/">Acessar /movies/1</a></div>
        <div className="movies-list-item"><a href="/">Acessar /movies/2</a></div>
      </div>
    </div>
  );
};

export default MoviesList;
