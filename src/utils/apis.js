export const fetchZone = async (zip) => {
let response = await fetch(`https://phzmapi.org/${zip}.json`)
let blerb = await response.json()
return await blerb;
};
