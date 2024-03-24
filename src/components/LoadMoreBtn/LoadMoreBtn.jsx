import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <button type="submit" onClick={onClick} className={css.btn}>
      Load more
    </button>
  );
}
