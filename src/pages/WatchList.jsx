import { useState, useEffect } from "react";

export default function WatchList() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Load watchlist from localStorage or state management
    // For now, we'll use a simple state
    setWatchlist([]);
  }, []);

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4">My Watchlist</h2>
      
      {watchlist.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="text-muted">Your watchlist is empty</h4>
          <p className="text-muted">Add movies to your watchlist by clicking the heart icon on movie cards.</p>
        </div>
      ) : (
        <div className="row g-3">
          {watchlist.map((movie) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text text-muted small">{movie.release_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
