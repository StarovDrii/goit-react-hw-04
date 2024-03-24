import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const query = form.elements.query.value;

    if (form.elements.query.value.trim().toLowerCase() === '') {
      toast.error('Please enter search term!', {
        position: 'top-right',
        style: {
        background: 'transparent',
        },
      });
      return;
    }
    onSubmit(query);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
}
