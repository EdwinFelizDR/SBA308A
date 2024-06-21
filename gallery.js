// gallery.js - Module for create a gallery of dog images
let currentPosition = 0; // Initialize the current position for image loading
let images = []; // Array to store the loaded images

// Function to set the images array with the provided img array
export function setImages(img) {
   images = img;
}

// Function to initialize the gallery by clearing existing images and loading new ones
export function initializeGallery() {
   const galleryDiv = document.getElementById("gallery"); // Cache the gallery container element
   galleryDiv.innerHTML = ""; // Clear existing images
   currentPosition = 0; // Reset the current position for image loading
   loadImages(); // Load the initial package of images
}

// Asynchronous function to load images of a specific breed from the API
export async function loadImagesByBreed(breed) {
   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`); // Fetch images for the specified breed
   const data = await response.json(); // Parse the response as JSON
   setImages(data.message); // Set the images array with the fetched images
   initializeGallery(); // Initialize the gallery to display the loaded images
}

//function to load images into the gallery container
async function loadImages() {
   const galleryDiv = document.getElementById("gallery"); // Get the gallery container element
   if (images.length > 0) { // Check if there are images in the array
      // Loops over a pack of 10 images starting from currentPosition in the images array
      for (let i = currentPosition; i < currentPosition + 10; i++) {
         if (i >= images.length) break; // Stop if there are no more images to load
         const img = document.createElement("img"); // Create an <img> element
         img.src = images[i]; // Set the source attribute to the image URL
         galleryDiv.appendChild(img); // Append the image to the gallery container
      }
      currentPosition += 10; // Update the current position for the next pack of images
   }
}
