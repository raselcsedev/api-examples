document.getElementById('error-message').style.display='none';
const searchFood = () => {
    const searchField = document.getElementById('search-field');

    const searchText = searchField.value;
    // console.log(searchText)
    searchField.value = '';
    document.getElementById('error-message').style.display='none';
    if(searchText==''){
        // will make div and show error text
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.meals))
        .catch(error => displayError(error));
    }
    
}
const displayError = error =>{
    document.getElementById('error-message').style.display='block';
}

const displayResult = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML= '';
    searchResult.textContent = '';
    meals.forEach(meal =>{
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div onclick = "loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })

}

/* const loadMealDetail = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]));
} */
const loadMealDetail = async mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;


    try{
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetail(data.meals[0]);
    }
    catch{
        console.log(error);
    }

    
}

const displayMealDetail = meal =>{
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}

// QUIZ

/* const bondCode=` I am Fake James bond . My new code is: 
00${7+1+2}`

console.log(bondCode);

const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
console.log(data.result[0].userName.name)

const p=[1,2,3]; 
const q=p.map( n=> Math.pow(n, 3));
console.log(q);

const path = "images/cat.jpg"; 
const div= document.createElement('div');
div.innerHTML = `<img src=${path} alt = "">`;


const url = `https://www.themealdb.com/api/json/v1/1/search.php?s={food}` 






const info = { name: "", phoneNumber: null };
console.log(JSON.stringify(info));

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array)); */


// quiz 35

/* let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q); 

const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); }
 */
/* function sum(p, q) {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);
   

   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }
 */
   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));