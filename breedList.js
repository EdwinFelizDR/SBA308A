// breedList.js - Module for handling breed list and select element
import { loadImagesByBreed } from './gallery.js'; // Import loadImagesByBreed from gallery.js

// Asynchronous function to fetch the list of dog breeds from an API (dog.ceo/api)
export async function fetchBreedList() {
   const response = await fetch("https://dog.ceo/api/breeds/list/all"); // Fetch data from the Dog CEO API
   const data = await response.json(); // Parse the response as JSON
   return data.message; // Return the list of dog breeds from the response
}

// Function to create a breed select dropdown based on the provided breedList
export function createBreedSelect(breedList) {
   const select = document.createElement("select"); // Create a <select> element
   
   // Populate the select element with options based on the breedList
   select.innerHTML = `
      <option>Choose a dog breed</option>
      ${Object.keys(breedList).map(breed => `<option>${breed}</option>`).join('')}
   `;
   
   // Add an event listener to handle the selections of different options
   select.addEventListener("change", () => {
      const selectedBreed = select.value; // Get the selected breed from the select element
      // Check if a valid breed (not the default option) is selected
      if (selectedBreed !== "Choose a dog breed") {
         loadImagesByBreed(selectedBreed); // Call loadImagesByBreed from gallery.js
      }
   });
   // Append the select element to the element (div) with id "breed" in the DOM
   document.getElementById("breed").appendChild(select);
}
