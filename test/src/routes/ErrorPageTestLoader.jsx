import axios from 'axios';

export default async function ErrorPageTestLoader() {
  await axios.get('TotallyNotExistingUrl.com');

  return null;
}
