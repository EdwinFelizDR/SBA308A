// API" Application Programming interface. Is just an organize way for one application to communicate
// to a totally separate application
// app.js - Main entry point, combining modules and initializing app
import { fetchBreedList, createBreedSelect } from './breedList.js';
import { setImages, initializeGallery, loadImagesByBreed } from './gallery.js'; // Include loadImagesByBreed here

async function initializeApp() {
   const breedList = await fetchBreedList();
   createBreedSelect(breedList);
}

initializeApp();
