import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
};
export default function ImageModal({
  closeModal,
  modalIsOpen,
  modal: { user, description, alt_description, url },
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          <img src={url} alt={alt_description} className={css.img} />
        </div>
        <div>
          <div className={css.info}>
            <img
              src={user?.profile_image.small}
              alt={alt_description}
              className={css.user_img}
            />
            <span>@{user?.instagram_username}</span>
            <a
              href={user?.portfolio_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              Look at my works
            </a>{' '}
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </Modal>
    </div>
  );
}
