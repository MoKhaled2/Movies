export default function Pagination({ page, setPage }) {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={handlePrev} disabled={page === 1}>
              Previous
            </button>
          </li>
          <li className="page-item active">
            <span className="page-link">{page}</span>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
