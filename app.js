// API" Application Programming interface. Is just an organize way for one application to communicate
// to a totally separate application

// app.js - Main entry point, combining modules and initializing app
import { fetchBreedList, createBreedSelect } from './breedList.js';
import { setImages, initializeGallery, loadImagesByBreed } from './gallery.js'; // Include loadImagesByBreed here

// Asynchronous function to initialize the application

async function createGallery() {
   // Fetch the list of dog breeds asynchronously and wait for the result
   const breedList = await fetchBreedList();
   // Call a function to create a breed select dropdown using the fetched list
   createBreedSelect(breedList);
}

// invoke the createGallery function to start the application`
createGallery();
