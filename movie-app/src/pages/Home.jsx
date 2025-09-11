import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);


  const apiKey = "714601e14e7fed0133bc898c6e24aacc";

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  return (
    
    <div className="container mt-5 pt-5">
      <div className="p-4 bg-light border rounded text-center">
        <h2>Welcome to our movie app</h2>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <input  
          type="text"
          className="form-control w-50 d-inline-block me-2"
          placeholder="Search and explore..."
        />
        <button className="btn btn-warning">Search</button>
      </div>

      <h3 className="mt-5 mb-3">Now Playing</h3>

      <div className="row g-3" style={{ minHeight: "400px" }}>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center w-100">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          movies.map((movie) => (
            // console.log(movie),
            <div className="col-6 col-md-3 col-lg-2" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))
        )}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
}
