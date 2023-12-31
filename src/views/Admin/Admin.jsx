import React, { useState, useEffect, useRef } from 'react';
import './Admin.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Componets/Footer/Footer';

const Admin = () => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const videoRefs = useRef({});
  const audioRefs = useRef({});

  const [formData, setFormData] = useState({
    videoSrc: '',
    audioSrc: '',
    title: '',
    description: '',
    category: 'Naturaleza',
  });

  const [cards, setCards] = useState([]);
  const [editCardId, setEditCardId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filteredCards, setFilteredCards] = useState([]);
  const [shouldAutoPlayVideo, setShouldAutoPlayVideo] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    fetchAllCards();
  }, [filterCategory]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    setFilteredCards(cards.slice(startIndex, endIndex));
  }, [currentPage, cards]);

  const fetchAllCards = async () => {
    try {
      let url = 'https://localhost:7134/AudioFiles/Get';

      if (filterCategory !== 'all') {
        url = `https://localhost:7134/AudioFiles/GetByCategory/${getCategoryByName(filterCategory)}`;
      }

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setCards(data);
      } else {
        console.error('Data collection error');
      }
    } catch (error) {
      console.error('Data collection error', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlayVideo = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].play();
      setShouldAutoPlayVideo(true);
    }
  };

  const handlePauseVideo = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
      setShouldAutoPlayVideo(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryId = getCategoryByName(formData.category);

    if (isEditing) {
      const updatedData = {
        videoSrc: formData.videoSrc,
        audioSrc: formData.audioSrc,
        title: formData.title,
        description: formData.description,
        Id_category: categoryId,
      };

      fetch(`https://localhost:7134/AudioFiles/Put/${editCardId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })
        .then((response) => {
          if (response.ok) {
            Swal.fire('Success', 'Card updated successfully!', 'success');
            setEditCardId(null);
            setIsEditing(false);

            fetchAllCards();

            setFormData({
              videoSrc: '',
              audioSrc: '',
              title: '',
              description: '',
              category: 'Nature',
            });
          } else {
            console.error('Error updating card');
            Swal.fire('Error', 'Failed to update card.', 'error');
          }
        })
        .catch((error) => {
          console.error('Error updating card', error);
          Swal.fire('Error', 'An error occurred while updating the card.', 'error');
        });
    } else {
      const categoryId = getCategoryByName(formData.category);

      if (categoryId !== null) {
        formData.Id_category = categoryId;

        const response = await fetch('https://localhost:7134/AudioFiles/Post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const newAudioFileId = await response.json();
          setFormData({
            videoSrc: '',
            audioSrc: '',
            title: '',
            description: '',
            category: 'Nature',
          });

          fetchAllCards();

          Swal.fire('Success', `Card added successfully with ID ${newAudioFileId}!`, 'success');
        } else {
          Swal.fire('Error', 'Failed to add card.', 'error');
        }
      } else {
        Swal.fire('Error', 'Invalid category selected.', 'error');
      }
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login', { replace: true });
      }
    });
  };

  const handleFilter = async (category) => {
    if (category === 'all') {
      setFilterCategory(category);
      setCurrentPage(1);
    } else {
      try {
        const response = await fetch(`https://localhost:7134/AudioFiles/GetByCategory/${getCategoryByName(category)}`);

        if (response.ok) {
          const data = await response.json();
          setFilterCategory(category);
          setCards(data);
          setCurrentPage(1);
        } else {
          console.error('Error getting cards by category');
        }
      } catch (error) {
        console.error('Error getting cards by category', error);
      }
    }
  };

  const getCategoryByName = (name) => {
    switch (name) {
      case 'Nature':
        return 1;
      case 'Instrument':
        return 2;
      default:
        return 1;
    }
  };

  const handleDelete = async (id_AudioFiles) => {
    Swal.fire({
      title: 'Are you sure you want to delete this card?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://localhost:7134/AudioFiles/Delete/${id_AudioFiles}`, {
            method: 'DELETE',
          });

          if (response.ok) {
            fetchAllCards();
            Swal.fire('Success', 'Card deleted successfully!', 'success');
          } else {
            Swal.fire('Error', 'Failed to delete card.', 'error');
          }
        } catch (error) {
          console.error('Error deleting card', error);
          Swal.fire('Error', 'An error occurred while deleting the card.', 'error');
        }
      }
    });
  };

  const handleEdit = (id) => {
    Swal.fire({
      title: 'Are you sure you want to edit this card?',
      text: 'This action will open an edit form.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, edit',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        const cardToEdit = cards.find((card) => card.id_AudioFiles === id);
        if (cardToEdit) {
          setFormData({
            videoSrc: cardToEdit.videoSrc,
            audioSrc: cardToEdit.audioSrc,
            title: cardToEdit.title,
            description: cardToEdit.description,
            category: getCategoryById(cardToEdit.Id_category),
          });

          setEditCardId(id);
          setIsEditModalOpen(true);
        }
      }
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      videoSrc: formData.videoSrc,
      audioSrc: formData.audioSrc,
      title: formData.title,
      description: formData.description,
      Id_category: getCategoryByName(formData.category),
    };
    fetch(`https://localhost:7134/AudioFiles/Put/${editCardId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire('Success', 'Card updated successfully!', 'success');
          setEditCardId(null);
          setIsEditModalOpen(false);
          fetchAllCards();
          setFormData({
            videoSrc: '',
            audioSrc: '',
            title: '',
            description: '',
            category: 'Nature',
          });
        } else {
          console.error('Error updating card', error);
          Swal.fire('Error', 'Failed to update card.', 'error');
        }
      })
      .catch((error) => {
        console.error('Error updating card', error);
        Swal.fire('Error', 'An error occurred while updating the card.', 'error');
      });
  };

  const getCategoryById = (id) => {
    switch (id) {
      case 1:
        return 'Nature';
      case 2:
        return 'Instrument';
      default:
        return 'Nature';
    }
  };

  return (
    <>
      <div className="bodyadmin">
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
        <div>
          <h1 className='welcome-admin'>Welcome Admin</h1>
        </div>

        <div className="form-styles">
          <form onSubmit={handleSubmit} className="form-container">
            <label htmlFor="videoSrc">Video URL:</label>
            <input
              type="text"
              id="videoSrc"
              name="videoSrc"
              value={formData.videoSrc}
              onChange={handleChange}
              required
            />

            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>

            <label htmlFor="audioSrc">Audio URL:</label>
            <input
              type="text"
              id="audioSrc"
              name="audioSrc"
              value={formData.audioSrc}
              onChange={handleChange}
              required
            />

            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Nature">Nature</option>
              <option value="Instrument">Instrument</option>
            </select>

            <button type="submit" className="Add">
              {isEditing ? 'Edit Card' : 'Add Card'}
            </button>
          </form>
        </div>
        <div className='line-container'>
          <hr className='line-admin'></hr>
        </div>
        <div className="filter-buttons">
          <button onClick={() => handleFilter('all')} className={`all-cards-button ${filterCategory === 'all' ? 'active' : ''}`}>
            All Cards
          </button>
          <button onClick={() => handleFilter('Nature')} className={`nature-button ${filterCategory === 'Nature' ? 'active' : ''}`}>
            Nature
          </button>
          <button onClick={() => handleFilter('Instrument')} className={`instrument-button ${filterCategory === 'Instrument' ? 'active' : ''}`}>
            Instrument
          </button>
        </div>
        <div className='text-title'>
          {filterCategory === 'all' && (
            <div className="all-cards-text">
              <p>All Cards</p>
            </div>
          )}

          {filterCategory === 'Nature' && (
            <div className="nature-button-text">
              <p>Nature</p>
            </div>
          )}

          {filterCategory === 'Instrument' && (
            <div className="instrument-button-text">
              <p>Instrument</p>
            </div>
          )}
        </div>

        <div className="card-container">
          {filteredCards.map((card, index) => (
            <div className="card" key={index}>
              <div className="imgBx">
                <video
                  ref={(ref) => (videoRefs.current[card.id_AudioFiles] = ref)}
                  src={card.videoSrc}
                  loop
                  muted
                  autoPlay={false}
                  style={{ width: '100%', pointerEvents: 'none', marginLeft: '50px' }}
                />
              </div>
              <div className="content">
                <h2 style={{ marginTop: '-100px' }}>{card.title}</h2>
                <h6 style={{ marginBottom: '10px' }}>{card.description}</h6>
                <audio
                  controls
                  onPlay={() => handlePlayVideo(card.id_AudioFiles)}
                  onPause={() => handlePauseVideo(card.id_AudioFiles)}
                  style={{ margin: '0' }}
                  ref={(ref) => (audioRefs.current[card.id_AudioFiles] = ref)}
                  src={card.audioSrc}
                >
                  {/* <source src={card.audioSrc} type="audio/mpeg" /> */}
                  Your browser does not support the audio element.
                </audio>
                <button className="edit" onClick={() => handleEdit(card.id_AudioFiles)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDelete(card.id_AudioFiles)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map(
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                style={{
                  padding: '5px',
                  backgroundColor: 'blue',
                  border: '2px solid black',
                  marginBottom: '20px',
                  color: 'white',
                }}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
      <Footer />

      {isEditModalOpen && (
        <div className="container-modal-editcard">
          <div className="modal-content">
            <h2 className='title-modal'>Edit Card</h2>
            <form className='edit-card-admin' onSubmit={handleEditSubmit}>
              <label className='edit-card-label' htmlFor="videoSrc">Video URL:</label>
              <input className='content-card-admin'
                type="text"
                id="videoSrc"
                name="videoSrc"
                value={formData.videoSrc}
                onChange={handleChange}
                required
              />
              <label className='edit-card-label' htmlFor="title">Title:</label>
              <input className='content-card-admin'
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <label className='edit-card-label' htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <label className='edit-card-label' htmlFor="audioSrc">Audio URL:</label>
              <input className='content-card-admin'
                type="text"
                id="audioSrc"
                name="audioSrc"
                value={formData.audioSrc}
                onChange={handleChange}
                required
              />
              <label className='edit-card-label' htmlFor="category">Category:</label>
              <select className='content-card-admin'
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Nature">Nature</option>
                <option value="Instrument">Instrument</option>
              </select>
              <button className='edit-card-button' type="submit">Save Changes</button>
              <button className='close-modal-button' onClick={() => {
                setIsEditModalOpen(false);
                setFormData({  // Restablece los campos del formulario
                  videoSrc: '',
                  audioSrc: '',
                  title: '',
                  description: '',
                  category: 'Nature',
                });
              }}>Close</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
