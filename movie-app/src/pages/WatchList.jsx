import { IoHeartDislikeOutline } from "react-icons/io5";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import WatchListContext from "../context/WatchListContext";

export default function WatchList() {
  const { watchlist, handleClick } = useContext(WatchListContext);
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const renderStars = (vote) => {
    const stars = Math.round(vote / 2);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <div className="container mt-3 pt-5">
      <h2 className="text-center mb-4">Watch List</h2>

      {watchlist.length === 0 ? (
        <div
          className="container d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "60vh" }}
        >
          <IoHeartDislikeOutline
            size={150}
            color="lightgray"
            className="mb-3"
          />
          <h4 className="text-muted mb-2">No Movies in Watch List</h4>
        </div>
      ) : (
        <div className="row g-4">
          {watchlist.map((movie) => {
            const isInWatchlist = watchlist.some((m) => m.id === movie.id);

            return (
              <div className="col-12 col-md-6" key={movie.id}>
                <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row border rounded p-3 shadow-sm h-100 position-relative overflow-hidden">
                  <div
                    className="img-container me-lg-3 mb-3 mb-lg-0 position-relative"
                    style={{ flex: "0 0 200px" }}
                  >
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded w-100"
                        style={{
                          height: "100%",
                          maxHeight: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>

                    <FaHeart
                      size={25}
                      color={isInWatchlist ? "red" : "gray"}
                      className="heart-animate d-block d-md-block d-lg-none"
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "15px",
                        right: "10px",
                        background: "rgba(124, 75, 67, 0.5)",
                        border: "none",
                        borderRadius: "50%",
                        padding: "5px",
                        zIndex: "1",
                        boxShadow: "0 0 20px 4px rgba(123, 68, 68, 1)",
                      }}
                      onClick={() => handleClick(movie)}
                    />
                  </div>

                  <div className="flex-grow-1 d-flex flex-column overflow-hidden">
                    <div className="d-flex justify-content-between align-items-start">
                      <h4
                        onClick={() => navigate(`/movie/${movie.id}`)}
                        className="mb-0 text-truncate"
                        style={{
                          maxWidth: "calc(100% - 40px)",
                          cursor: "pointer",
                        }}
                      >
                        {movie.title}
                      </h4>

                      <FaHeart
                        size={22}
                        color={isInWatchlist ? "red" : "gray"}
                        className="heart-animate d-none d-md-none d-lg-block"
                        style={{
                          cursor: "pointer",
                          background: "rgba(167, 167, 167, 0.35)",
                          borderRadius: "50%",
                          padding: "5px",
                          margin: "5px",
                          boxShadow: "0 0 10px 2px rgba(95, 95, 95, 0.3)",
                        }}
                        onClick={() => handleClick(movie)}
                      />
                    </div>

                    <p className="text-muted mb-1">
                      Release Date: {movie.release_date}
                    </p>
                    <p className="mb-1">
                      <span className="text-warning fs-5">
                        {renderStars(movie.vote_average)}{" "}
                        <small className="text-muted fs-6">
                          (
                          <span className="fw-bold text-black">
                            {movie.vote_count}
                          </span>{" "}
                          votes)
                        </small>
                      </span>
                    </p>

                    <p className="text-gray-700 text-sm flex-grow-1">
                      {expanded[movie.id]
                        ? movie.overview
                        : movie.overview.length > 180
                        ? movie.overview.slice(0, 180) + "..."
                        : movie.overview}
                    </p>

                    {movie.overview.length > 180 && (
                      <button
                        onClick={() =>
                          setExpanded((prev) => ({
                            ...prev,
                            [movie.id]: !prev[movie.id], // expanded{ 101: true, 102: false}
                          }))
                        }
                        className="underline text-sm p-0 bg-transparent border-0 d-inline-flex align-items-center"
                        style={{ cursor: "pointer", color: "#007BFF" }}
                      >
                        {expanded[movie.id] ? (
                          <>
                            View Less <RxCaretUp className="ms-1" />
                          </>
                        ) : (
                          <>
                            View More <RxCaretDown className="ms-1" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="d-flex justify-content-center my-5">
        <Link to={"/"} className="btn btn-warning px-4 py-2 fw-bold ">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
