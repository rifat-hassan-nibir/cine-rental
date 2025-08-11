function getImageUrl(imageTitle) {
  return new URL(`../assets/movie-covers/${imageTitle}`, import.meta.url).href;
}

export { getImageUrl };
