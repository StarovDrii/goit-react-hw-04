import css from './ImageCard.module.css';

export default function ImageCard({
  image: { alt_description, urls, user, description },
  openModal,
}) {
  return (
    <div>
      <img
        onClick={() =>
          openModal({ alt_description, url: urls.regular, user, description })
        }
        src={urls.small}
        alt={alt_description}
        className={css.img}
      />
    </div>
  );
}
