import React from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';

import HeroSlide from '../components/hero-slide/HeroSlide';
import MoviesList from '../components/movie-list/MoviesList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MoviesList category={category.movie} type={movieType.popular} />
        </div>


        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MoviesList category={category.movie} type={movieType.top_rated} />
        </div>


        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MoviesList category={category.tv} type={tvType.popular} />
        </div>


        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MoviesList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  )
}

export default Home;