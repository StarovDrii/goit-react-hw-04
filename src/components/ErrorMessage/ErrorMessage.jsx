import img from '../../img/error.webp';
import css from './ErrorMessage.module.css';

export default function ErrorMasege() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className={css.box}>
      <img src={img} alt="Error" className={css.img} />
      <p>Whoops, something went wrong! Please, try reloading this page!</p>
      <button onClick={refreshPage}>Reload</button>
    </div>
  );
}
