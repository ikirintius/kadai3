export async function fetchImages() {
  const response = await fetch(
    `http://shibe.online/api/shibes?count=12&urls=true&httpsUrls=true`
  );
  const data = await response.json();
  return data.message;
}