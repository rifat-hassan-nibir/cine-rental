import star from "../../assets/star.svg";

export default function Rating({ rating }) {
  const stars = Array(rating).fill(star);
  return stars.map((star, index) => <img src={star} key={index} width="14" height="14" alt="star" />);
}
