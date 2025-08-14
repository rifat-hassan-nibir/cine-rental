import { useContext, useState } from "react";
import { getImageUrl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { CartContext } from "../../context/CartContext";
import cartIcon from "../../assets/tag.svg";

export default function MovieCard({ movieDetails }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(CartContext);
  const { cover, title, genre, rating, price } = movieDetails;

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = () => {
    setSelectedMovie(movieDetails);
    setShowModal(true);
  };

  const handleAddToCart = (event, addedMovie) => {
    event.stopPropagation();
    const found = state.cartData.find((item) => item.id === addedMovie.id);
    if (found) {
      alert("This movie is already in your cart.");
      return;
    }
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...addedMovie },
    });
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal movieDetails={movieDetails} onClose={handleCloseModal} onAddToCart={(e) => handleAddToCart(e, movieDetails)} />
      )}
      <div onClick={() => handleMovieSelection(movieDetails)} className="hover:cursor-pointer">
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <img className="w-full object-cover" src={getImageUrl(cover)} alt={title} />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating rating={rating} />
            </div>
            <a
              onClick={(e) => handleAddToCart(e, movieDetails)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <img src={cartIcon} alt="cart-icon" />
              <span>${price} | Add to Cart</span>
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
