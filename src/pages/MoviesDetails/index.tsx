import { AxiosRequestConfig } from 'axios';
import RatingCard from 'components/RatingCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { requestBackend } from 'utils/requests';
import './styles.css';

type UrlParams = {
  movieId: string
}

const MoviesDetails = () => {

  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {    
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true
    };

    requestBackend(params)
    .then(response => {
      setMovie(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  }, [movieId]);

  return (
    <div className="movie-det-container">
      <h2>Detalhes do filme: {movie?.title}</h2>

      <div className="base-card movie-rating-includer">
        <div><input className="base-input" type="text" placeholder="Deixe sua avaliação aqui" /></div>
        <div><button className="button">SALVAR AVALIAÇÃO</button></div>
      </div>

      <div className="base-card movie-reviews-container">
        {movie?.reviews.map((review) => (
          <div className="movie-det-comment" key={review.id}><RatingCard review={review} /></div>
        ))}
      </div>
    </div>
  );
}

export default MoviesDetails;