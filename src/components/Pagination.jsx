export default function Pagination({ page, setPage }) {
  return (
    <nav className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => setPage(page - 1)}>Prev</button>
        </li>
        <li className="page-item active">
          <span className="page-link">{page}</span>
        </li>
        <li className={`page-item `}>
          <button className="page-link" onClick={() => setPage(page + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
}
