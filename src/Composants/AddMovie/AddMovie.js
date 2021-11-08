import "./AddMovie.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const AddMovie = ({ addNewMovie }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newMovie = {
      id: Math.floor(Math.random() * 1000),
      name,
      date,
      rating : +rating,
      image,
      type,
      description
    };

    addNewMovie(newMovie);
    setModalIsOpen(false);
    setName("");
    setDate("");
    setRating("");
    setImage("");
    setType("");
    setDescription("");
  };

  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          +
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <label>Movie Rate</label>
            <input
              type="number"
              name="rating"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              required
            />

            <label>Movie Release Date</label>
            <input
              type="number"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />

            <label>Movie Image</label>
            <input
              type="url"
              name="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required
            />

            <label>Movie Type</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={(event) => setType(event.target.value)}
              required
            />

            <label>Movie Summary</label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;