import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'css-loader/dist/css-loader.css';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
const API_KEY = '44238533-8b617bda18ddca61b92d6b256';

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        query
      )}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    const data = await response.json();
    loader.style.display = 'none';

    const images = data.hits;

    if (images.length === 0) {
      iziToast.info({
        title: 'No Results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    const markup = images
      .map(image => {
        return `
        <a href="${image.largeImageURL}" class="gallery-item">
          <img src="${image.webformatURL}" alt="${image.tags}">
          <div>
            <p>Likes: ${image.likes}</p>
            <p>Views: ${image.views}</p>
            <p>Comments: ${image.comments}</p>
            <p>Downloads: ${image.downloads}</p>
          </div>
        </a>
      `;
      })
      .join('');

    gallery.insertAdjacentHTML('beforeend', markup);

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.error(error);
  }
});
