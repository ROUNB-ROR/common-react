export default async function ErrorPageTestLoader() {
  const e = new Error('123');
  e.statusText = 'status Text';

  throw e;
}
