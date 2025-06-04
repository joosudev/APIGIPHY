const getImagen = async () => {
  const apiKey = '5duXGZopEkc8xiIiQP21p0mNOyNnYeZX';

  try {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const { data } = await resp.json(); // es necesario siempre desestructurar la data
    const { url } = data.images.original; // data.data.images.original si no se desestructura la data

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error('Error fetching image:', error);
  }
};

getImagen();
