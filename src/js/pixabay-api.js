export function doFetch(query) {
  const API_KEY = '43290538-553335dd3499f06be9a5135a9';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
