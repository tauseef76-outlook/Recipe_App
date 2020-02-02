import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = '5d86b80b';
  const APP_KEY = 'cfcaecebd594f50fe76361ccdfa682c9';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");


  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response  = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" placeholder="Enter Recipe...." type="text" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">Yummyy...!</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key = {recipe.recipe.label}
        title = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>

      <div className="footer">
        made with
        <span style = {{color:"red"}}><strong> ♥ </strong></span> by
        <span><strong> Tauseef Anwar </strong></span> |
        © 2020
      </div>
    </div>
  );
}

export default App;
