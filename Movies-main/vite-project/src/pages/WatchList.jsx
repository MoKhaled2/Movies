import { IoHeartDislikeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function WatchList() {
  return (
    <div className="container mt-4">
      <h2>Watch List</h2>
      <div
        className="container mt-5 d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <IoHeartDislikeOutline size={500} color="lightgray" className="mb-3" />

        <h4 className="text-muted mb-4">No Movies in Watch List</h4>

        <Link to={"/"} className="btn btn-warning px-4 py-2 fw-bold ">
           Back to Home
        </Link>
      </div>
    </div>
  );
}
