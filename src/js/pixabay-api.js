const API_KEY = '44238533-8b617bda18ddca61b92d6b256';

export async function fetchImages(query) {
  const response = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.hits;
}
