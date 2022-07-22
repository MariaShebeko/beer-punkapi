export default function Pagination({ prev, next, page, totalPages }) {
  return (
    <div>
      <button type="button" onClick={prev} disabled={page <= 1}>
        prev
      </button>
      <button type="button" onClick={next} disabled={page >= totalPages}>
        next
      </button>
    </div>
  );
}
