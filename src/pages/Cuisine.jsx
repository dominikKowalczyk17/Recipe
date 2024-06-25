import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  Wrapper,
  Grid,
  RecipeTile,
  Gradient,
} from "../components/StyledComponents";
import { useEffect, useState } from "react";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let { type } = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`,
    );

    const recipes = await data.json();
    console.log(recipes);
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(type);
  }, [type]);
  return (
    <Wrapper>
      <h3>{type} recipes</h3>
      <Grid>
        {cuisine.map((item) => {
          return (
            <RecipeTile key={item.id}>
              <Link to={`/recipe/` + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </RecipeTile>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export default Cuisine;
