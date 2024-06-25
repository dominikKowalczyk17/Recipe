import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, RecipeTile } from "../components/StyledComponents";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`,
    );
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((recipe) => {
        return (
          <RecipeTile key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </RecipeTile>
        );
      })}
    </Grid>
  );
}

export default Searched;
