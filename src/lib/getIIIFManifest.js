async function getIIIFManifest(id) {
  try {
    const response = await fetch(id);
    const manifest = await response.json();
    return manifest;
  } catch (error) {
    console.error(error);
  }
}

export { getIIIFManifest };
