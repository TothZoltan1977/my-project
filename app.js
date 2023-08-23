
/*CONTAINER-BAR*/
const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
    counterEl.innerText = "0";
    incrementCounter();
    function incrementCounter() {
       let currentNum = +counterEl.innerText;
       const dataCeil = counterEl.getAttribute("data-ceil");
       const increment = dataCeil / 15
       currentNum = Math.ceil (currentNum + increment)
       counterEl.innerText = currentNum
       if (currentNum < dataCeil) {
        setTimeout (incrementCounter, 120)
       } else {
        counterEl.innerText = dataCeil
       }
    }
});
/*CONTAINER-BAR*/



/*search bar*/
const searhBarContainelEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");


magnifierEl.addEventListener("click", ()=> {
        searhBarContainelEl.classList.toggle("active");
});
/*search bar*/




/*search filter*/
function filter(){
    
 var filterValue, input, ul,li,a,i;
     input = document.getElementById("search");
     filterValue = input.value.toUpperCase();
    ul = document.getElementById("Menu");
     li = ul.getElementsByTagName("li");
        
        for (i = 0 ; i < li.length ; i++){
            a = li[i].getElementsByTagName("a")[0];
            if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                li[i].style.display = "";
                
            }else{
                li[i].style.display = "none";
        }
    }
}
/*search filter*/

/*search pictures*/
const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");

async function fetchImage() {
  const inputValue = document.getElementById("input").value;

  if (inputValue > 50 || inputValue < 1) {
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "Number should be between 0 and 50";
    return;
  }

  imgs = "";

  try {
    btnEl.style.display = "none";
    const loading = `<img src="./img/rolling.svg"/>`;
    galleryEl.innerHTML = loading;
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=4xATUXcgSdluPXOSNheR1d4k7sR_Cubk1mFa3ThwgM4`
    ).then((res) =>
      res.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            imgs += `
            <img src=${pic.urls.small} alt="image"/>
            `;
            galleryEl.style.display = "block";
            galleryEl.innerHTML = imgs;
            btnEl.style.display = "block";
            errorMessageEl.style.display = "none";
          });
        }
      })
    );
  } catch (error) {
    console.log(error);
    errorMessageEl.style.display = "block";
    errorMessageEl.innerHTML = "An error happened, try again later";
    btnEl.style.display = "block";
    galleryEl.style.display = "none";
  }
}

btnEl.addEventListener("click", fetchImage);
/*search pictures*/