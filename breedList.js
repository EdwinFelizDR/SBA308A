// breedList.js - Module for handling breed list and select element
import { loadImagesByBreed } from './gallery.js'; // Import loadImagesByBreed from gallery.js

export async function fetchBreedList() {
   const response = await fetch("https://dog.ceo/api/breeds/list/all");
   const data = await response.json();
   return data.message;
}

export function createBreedSelect(breedList) {
   const select = document.createElement("select");
   select.innerHTML = `
      <option>Choose a dog breed</option>
      ${Object.keys(breedList).map(breed => `<option>${breed}</option>`).join('')}
   `;
   select.addEventListener("change", () => {
      const selectedBreed = select.value;
      if (selectedBreed !== "Choose a dog breed") {
         loadImagesByBreed(selectedBreed); // Call loadImagesByBreed from gallery.js
      }
   });
   document.getElementById("breed").appendChild(select);
}
