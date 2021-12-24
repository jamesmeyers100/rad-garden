export const fetchZone = async (zip) => {
  const response = await fetch(`https://phzmapi.org/${zip}.json`);
  const blerb = await response.json();
  return await blerb;
};
