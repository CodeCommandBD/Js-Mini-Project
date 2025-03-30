const show = document.getElementById('show')

const searchBtn = () =>{
   
    const qury = document.getElementById('searchBox').value

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${qury}`)
    .then( res => res.json())
    .then(data => {
        
        
       const recipes = data.meals
        console.log(recipes);
        
       if(recipes){
        recipes.forEach(recipe => {
           const div = document.createElement('div')
           div.innerHTML = `
            <p>${recipe.strMeal}</p>
            <img src=${recipe.strMealThumb} width='100%'>
            <p>${recipe.strInstructions
            }</p>
           
           `
           show.appendChild(div)
           document.getElementById('searchBox').value = ''
        })
       }else{
        show.innerHTML = '<p> No recipes found</p>'
       }
    }
    )
}