import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning px-3 fixed-top" >
      <Link className="navbar-brand fw-bold " to="/">Mov<span className="text-danger fw-bold " >ie App</span></Link>
      <div className="ms-auto d-flex align-items-center">
        <span className="me-3">En</span>
        <Link to="/watchlist" className="btn btn-outline-dark">
          ❤️ Watchlist
        </Link>
      </div>
    </nav>
  );
}
