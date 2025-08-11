import { getImageUrl } from "../../utils/cine-utility";
import deleteIcon from "../../assets/delete.svg";

export default function CartItemCard({ movie, onRemoveItem }) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <div className="flex items-center gap-4">
        <img className="rounded overflow-hidden" src={getImageUrl(movie.cover)} alt={movie.cover} height={100} width={100} />
        <div>
          <h3 className="text-base md:text-xl font-bold">{movie.title}</h3>
          <p className="max-md:text-xs text-[#575A6E]">{movie.genre}</p>
          <span className="max-md:text-xs">${movie.price}</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <button
          onClick={() => {
            onRemoveItem(movie.id);
          }}
          className="hover:cursor-pointer bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
        >
          <img className="w-5 h-5" src={deleteIcon} alt="delete-icon" />
          <span className="max-md:hidden">Remove</span>
        </button>
      </div>
    </div>
  );
}
