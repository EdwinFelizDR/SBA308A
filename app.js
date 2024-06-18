// API" Application Programming interface. Is just an organize way for one application to communicate
// to a totally separate application

// fetch("https://dog.ceo/api/breeds/list/all").then(function(response) {
//    return response.json()
// }).then(function(data){
//    console.log(data);
// })



async function getDogData(){
   const response = await fetch("https://dog.ceo/api/breeds/list/all");
   const data = await response.json();
   createBreedList(data.message);
}

getDogData();

function createBreedList(breedList){
   divE1 = document.getElementById("breed");
   divE1.innerHTML =`
   <select onchange="loadByBreed(this.value)">
      <option>Choose a dog breed</option>
      ${Object.keys(breedList).map(function(breed){
         return `<option>${breed}</option>`
      }).join('')}
   </select>
   `;
}

async function loadByBreed(breed){
   if (breed != "Choose a dog breed"){
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await response.json();
      createSlideShow(data.message);
   }
}

function createSlideShow(img){
   let currentPosition = 0;
   divE2 = document.getElementById("slideshow");
   divE2.innerHTML =`
   <div class="slide" style="background-image: url('${img[0]}')"></div>
   `;

   currentPosition += 2;
   setInterval(nextSlide, 1000)

   function nextSlide(){
      document.getElementById("slideshow").insertAdjacentHTML("beforeend",
         `<div class="slide" style="background-image: url('${img[currentPosition]}')"></div>
         `)
         setTimeout(function(){
            document.querySelector(".slide").remove();
         }, 5000);
         if (currentPosition+1 >=img.length){
            currentPosition = 0;
         }else{
            currentPosition++;

         }
   }
}

