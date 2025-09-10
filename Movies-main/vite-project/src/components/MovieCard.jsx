import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";

export default function MovieCard({ movie }) {
  const imgBase = "https://image.tmdb.org/t/p/w300";
  const [inWatchlist, setInWatchlist] = useState(false);

  const handleClick = () => {
    setInWatchlist(!inWatchlist);

    if (!inWatchlist) {
      toast.success(`${movie.title} added to Watchlist ❤️`);
    } else {
      toast.error(`${movie.title} removed from Watchlist 💔`);
    }
  };
  

  const getRateColor = (rate) => {
    if (rate >= 70) return "#21d07a";
    if (rate >= 50) return "#d2d531";
    return "#db2360";
  };

  const rate = Math.round(movie.vote_average * 10);

  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="position-relative">
        <img
          src={imgBase + movie.poster_path}
          className="card-img-top rounded"
          alt={movie.title}
        />

        <div
          className="position-absolute"
          style={{
            bottom: "-15px",
            left: "5px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#081c22",
            border: `3px solid ${getRateColor(rate)}`,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          {rate}%
        </div>
      </div>

      <div className="card-body">
        <h5
          className="card-title movie-title"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {movie.title}
        </h5>
        <div className="d-flex justify-content-between align-items-center p-2">
          <p className="text-muted small mb-0">{movie.release_date}</p>
          <FaHeart
            size={18}
            color={inWatchlist ? "red" : "gray"}
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
