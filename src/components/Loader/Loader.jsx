import { Triangle } from 'react-loader-spinner';
import css from './Loader.module.css';
export default function Loader() {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#50C7C7"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass={css.wrap}
    />
  );
}
