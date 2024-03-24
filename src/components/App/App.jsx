import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ErrorMasege from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';
import fetchImg, { totalResponseElements } from '../../img-api';
import './App.css';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageInfo, setImageInfo] = useState({});

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImg(query, page);
        if (data.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again!',
            {
              position: 'top-right',
              style: {
              background: 'transparent',
              },
            }
          );
          return;
        }
        setPictures(prevPictures => {
          return prevPictures.length > 0 ? [...prevPictures, ...data] : data;
        });
      } catch (error) {
        setError(true);
        return;
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPictures([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = values => {
    setImageInfo(values);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
    setImageInfo({});
  };

  return (
    <div className="container">
      {!error && (
        <>
          <SearchBar onSubmit={handleSearch} />
          {pictures.length > 0 && (
            <ImageGallery items={pictures} openModal={openModal} />
          )}
          {loading && <Loader />}
          {pictures.length > 0 && totalResponseElements !== pictures.length && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
          <ImageModal
            closeModal={closeModal}
            modalIsOpen={showModal}
            modal={imageInfo}
          />
        </>
      )}
      {error && <ErrorMasege />}
      <Toaster />
    </div>
  );
}
