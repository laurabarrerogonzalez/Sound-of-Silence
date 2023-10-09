// // import React, { useState, useEffect } from "react";
// // import "./Admin.css";
// // import Header from "../../Componets/Header/Header.jsx";
// // import Footer from "../../Componets/Footer/Footer.jsx";

// // const Admin = () => {
// //   const [formData, setFormData] = useState({
// //     videoSrc: "",
// //     audioSrc: "",
// //     title: "",
// //     description: "",
// //   });

// //   const [cards, setCards] = useState([]);
// //   const [editCardId, setEditCardId] = useState(null);
// //   const [isEditing, setIsEditing] = useState(false);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch("http://localhost:3000/cards");
// //         if (response.ok) {
// //           const data = await response.json();
// //           setCards(data);
// //         } else {
// //           console.error("Error en la obtención de datos");
// //         }
// //       } catch (error) {
// //         console.error("Error en la obtención de datos", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleEdit = (cardId) => {
// //     setEditCardId(cardId);
// //     setIsEditing(true);

// //     const cardToEdit = cards.find((card) => card.id === cardId);
// //     if (cardToEdit) {
// //       setFormData({
// //         videoSrc: cardToEdit.videoSrc,
// //         audioSrc: cardToEdit.audioSrc,
// //         title: cardToEdit.title,
// //         description: cardToEdit.description,
// //       });
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (isEditing) {
// //       const response = await fetch(`http://localhost:3000/cards/${editCardId}`, {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         const updatedResponse = await fetch("http://localhost:3000/cards");
// //         if (updatedResponse.ok) {
// //           const data = await updatedResponse.json();
// //           setCards(data);
// //         }
// //       } else {
// //         console.error("Error al enviar los datos de edición");
// //       }
// //     } else {
// //       const response = await fetch("http://localhost:3000/cards", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         setFormData({
// //           videoSrc: "",
// //           audioSrc: "",
// //           title: "",
// //           description: "",
// //         });

// //         const updatedResponse = await fetch("http://localhost:3000/cards");
// //         if (updatedResponse.ok) {
// //           const data = await updatedResponse.json();
// //           setCards(data);
// //         }
// //       } else {
// //         console.error("Error al enviar los datos");
// //       }
// //     }

// //     setIsEditing(false);
// //     setEditCardId(null);
// //   };

// //   const handleDelete = async (cardId) => {
// //     try {
// //       const response = await fetch(`http://localhost:3000/cards/${cardId}`, {
// //         method: "DELETE",
// //       });

// //       if (response.ok) {
// //         const updatedCards = cards.filter((card) => card.id !== cardId);
// //         setCards(updatedCards);
// //       } else {
// //         console.error("Error al eliminar la tarjeta");
// //       }
// //     } catch (error) {
// //       console.error("Error al eliminar la tarjeta", error);
// //     }
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <div className="bodyadmin">
// //         <div className="form-styles">
// //           <form onSubmit={handleSubmit} className="form-container">
// //             <label htmlFor="videoSrc">Video URL:</label>
// //             <input
// //               type="text"
// //               id="videoSrc"
// //               name="videoSrc"
// //               value={formData.videoSrc}
// //               onChange={handleChange}
// //               required
// //             />

// //             <label htmlFor="title">Title:</label>
// //             <input
// //               type="text"
// //               id="title"
// //               name="title"
// //               value={formData.title}
// //               onChange={handleChange}
// //               required
// //             />

// //             <label htmlFor="description">Description:</label>
// //             <textarea
// //               id="description"
// //               name="description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               required
// //             ></textarea>

// //             <label htmlFor="audioSrc">Audio URL:</label>
// //             <input
// //               type="text"
// //               id="audioSrc"
// //               name="audioSrc"
// //               value={formData.audioSrc}
// //               onChange={handleChange}
// //               required
// //             />

// //             <button type="submit" className="Add">
// //               {isEditing ? "Edit Card" : "Add Card"}
// //             </button>
// //           </form>
// //         </div>
// //         <div className="container-admin">
// //           <div className="card-container">
// //             {cards.map((card, index) => (
// //               <div className="card" key={index}>
// //                 <div className="imgBx">
// //                   <video
// //                     src={card.videoSrc}
// //                     autoPlay
// //                     loop
// //                     muted
// //                     playsInline
// //                     preload="auto"
// //                     poster={card.videoSrc}
// //                     style={{ width: "100%", pointerEvents: "none", marginLeft: "50px" }}
// //                   />
// //                 </div>
// //                 <div className="content">
// //                   <h2 style={{ marginTop: "-100px" }}>{card.title}</h2>
// //                   <p style={{ marginBottom: "10px" }}>{card.description}</p>
// //                   <audio controls style={{ margin: "0" }}>
// //                     <source src={card.audioSrc} type="audio/mpeg" />
// //                     Your browser does not support the audio element.
// //                   </audio>
// //                   <button className="edit" onClick={() => handleEdit(card.id)}>Edit</button>
// //                   <button className="delete" onClick={() => handleDelete(card.id)}>Delete</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Admin;



// import React, { useState, useEffect } from "react";
// import "./Admin.css";
// import Header from "../../Componets/Header/Header.jsx";
// import Footer from "../../Componets/Footer/Footer.jsx";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.css";

// const Admin = () => {
//   const [formData, setFormData] = useState({
//     videoSrc: "",
//     audioSrc: "",
//     title: "",
//     description: "",
//   });

//   const [cards, setCards] = useState([]);
//   const [editCardId, setEditCardId] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/cards");
//         if (response.ok) {
//           const data = await response.json();
//           setCards(data);
//         } else {
//           console.error("Error en la obtención de datos");
//         }
//       } catch (error) {
//         console.error("Error en la obtención de datos", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isEditing) {
//       const response = await fetch(`http://localhost:3000/cards/${editCardId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const updatedResponse = await fetch("http://localhost:3000/cards");
//         if (updatedResponse.ok) {
//           const data = await updatedResponse.json();
//           setCards(data);
//           Swal.fire("Success", "Card edited successfully!", "success");
//         }
//       } else {
//         Swal.fire("Error", "Failed to edit card.", "error");
//       }
//     } else {
//       const response = await fetch("http://localhost:3000/cards", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setFormData({
//           videoSrc: "",
//           audioSrc: "",
//           title: "",
//           description: "",
//         });

//         const updatedResponse = await fetch("http://localhost:3000/cards");
//         if (updatedResponse.ok) {
//           const data = await updatedResponse.json();
//           setCards(data);
//           Swal.fire("Success", "Card added successfully!", "success");
//         }
//       } else {
//         Swal.fire("Error", "Failed to add card.", "error");
//       }
//     }

//     setIsEditing(false);
//     setEditCardId(null);
//   };

//   const handleDelete = async (cardId) => {
//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//       });

//       if (result.isConfirmed) {
//         const response = await fetch(`http://localhost:3000/cards/${cardId}`, {
//           method: "DELETE",
//         });

//         if (response.ok) {
//           const updatedCards = cards.filter((card) => card.id !== cardId);
//           setCards(updatedCards);
//           Swal.fire("Deleted!", "Card has been deleted.", "success");
//         } else {
//           Swal.fire("Error", "Failed to delete card.", "error");
//         }
//       }
//     } catch (error) {
//       console.error("Error al eliminar la tarjeta", error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="bodyadmin">
//         <div className="form-styles">
//           <form onSubmit={handleSubmit} className="form-container">
//             <label htmlFor="videoSrc">Video URL:</label>
//             <input
//               type="text"
//               id="videoSrc"
//               name="videoSrc"
//               value={formData.videoSrc}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="title">Title:</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="description">Description:</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//             ></textarea>

//             <label htmlFor="audioSrc">Audio URL:</label>
//             <input
//               type="text"
//               id="audioSrc"
//               name="audioSrc"
//               value={formData.audioSrc}
//               onChange={handleChange}
//               required
//             />

//             <button type="submit" className="Add">
//               {isEditing ? "Edit Card" : "Add Card"}
//             </button>
//           </form>
//         </div>
//         <div className="container-admin">
//           <div className="card-container">
//             {cards.map((card, index) => (
//               <div className="card" key={index}>
//                 <div className="imgBx">
//                   <video
//                     src={card.videoSrc}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     preload="auto"
//                     poster={card.videoSrc}
//                     style={{ width: "100%", pointerEvents: "none", marginLeft: "50px" }}
//                   />
//                 </div>
//                 <div className="content">
//                   <h2 style={{ marginTop: "-100px" }}>{card.title}</h2>
//                   <p style={{ marginBottom: "10px" }}>{card.description}</p>
//                   <audio controls style={{ margin: "0" }}>
//                     <source src={card.audioSrc} type="audio/mpeg" />
//                     Your browser does not support the audio element.
//                   </audio>
//                   <button className="edit" onClick={() => handleEdit(card.id)}>Edit</button>
//                   <button className="delete" onClick={() => handleDelete(card.id)}>Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Admin;




import React, { useState, useEffect } from "react";
import "./Admin.css";
import Header from "../../Componets/Header/Header.jsx";
import Footer from "../../Componets/Footer/Footer.jsx";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const Admin = () => {
  const [formData, setFormData] = useState({
    videoSrc: "",
    audioSrc: "",
    title: "",
    description: "",
  });

  const [cards, setCards] = useState([]);
  const [editCardId, setEditCardId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/cards");
        if (response.ok) {
          const data = await response.json();
          setCards(data);
        } else {
          console.error("Error en la obtención de datos");
        }
      } catch (error) {
        console.error("Error en la obtención de datos", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = (cardId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to edit this card.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setEditCardId(cardId);
        setIsEditing(true);

        const cardToEdit = cards.find((card) => card.id === cardId);
        if (cardToEdit) {
          setFormData({
            videoSrc: cardToEdit.videoSrc,
            audioSrc: cardToEdit.audioSrc,
            title: cardToEdit.title,
            description: cardToEdit.description,
          });
        }
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      const response = await fetch(`http://localhost:3000/cards/${editCardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedResponse = await fetch("http://localhost:3000/cards");
        if (updatedResponse.ok) {
          const data = await updatedResponse.json();
          setCards(data);
          Swal.fire("Success", "Card edited successfully!", "success");
          setIsEditing(false);
          setEditCardId(null);

          // Vaciar los campos del formulario después de la edición
          setFormData({
            videoSrc: "",
            audioSrc: "",
            title: "",
            description: "",
          });
        }
      } else {
        Swal.fire("Error", "Failed to edit card.", "error");
      }
    } else {
      const response = await fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          videoSrc: "",
          audioSrc: "",
          title: "",
          description: "",
        });

        const updatedResponse = await fetch("http://localhost:3000/cards");
        if (updatedResponse.ok) {
          const data = await updatedResponse.json();
          setCards(data);
          Swal.fire("Success", "Card added successfully!", "success");
        }
      } else {
        Swal.fire("Error", "Failed to add card.", "error");
      }
    }
  };

  const handleDelete = async (cardId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await fetch(`http://localhost:3000/cards/${cardId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const updatedCards = cards.filter((card) => card.id !== cardId);
          setCards(updatedCards);
          Swal.fire("Deleted!", "Card has been deleted.", "success");
        } else {
          Swal.fire("Error", "Failed to delete card.", "error");
        }
      }
    } catch (error) {
      console.error("Error al eliminar la tarjeta", error);
    }
  };

  return (
    <>
      <Header />
      <div className="bodyadmin">
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

            <button type="submit" className="Add">
              {isEditing ? "Edit Card" : "Add Card"}
            </button>
          </form>
        </div>
        <div className="container-admin">
          <div className="card-container">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <div className="imgBx">
                  <video
                    src={card.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={card.videoSrc}
                    style={{ width: "100%", pointerEvents: "none", marginLeft: "50px" }}
                  />
                </div>
                <div className="content">
                  <h2 style={{ marginTop: "-100px" }}>{card.title}</h2>
                  <p style={{ marginBottom: "10px" }}>{card.description}</p>
                  <audio controls style={{ margin: "0" }}>
                    <source src={card.audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <button className="edit" onClick={() => handleEdit(card.id)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(card.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
