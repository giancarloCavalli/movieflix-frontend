import RatingCard from 'components/RatingCard';
import './styles.css';

const MoviesDetails = () => {
  return (
    <div className="movie-det-container">
      <h2>Tela detalhes do filme id: 1</h2>

      <div className="base-card movie-rating-includer">
        <div><input className="base-input" type="text" placeholder="Deixe sua avaliação aqui" /></div>
        <div><button className="button">SALVAR AVALIAÇÃO</button></div>
      </div>

      <div className="base-card movie-reviews-container">
        <RatingCard />
      </div>
    </div>
  );
}

export default MoviesDetails;