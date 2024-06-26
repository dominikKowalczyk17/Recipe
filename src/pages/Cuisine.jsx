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
  const [error, setError] = useState(null);
  let { type } = useParams();

  useEffect(() => {
    const getCuisine = async (name) => {
      const check = localStorage.getItem(`cuisine-${name}`);

      if (check && check !== "undefined") {
        try {
          setCuisine(JSON.parse(check));
        } catch (error) {
          console.error(
            "Error parsing cuisine recipes from localStorage:",
            error,
          );
          localStorage.removeItem(`cuisine-${name}`);
          setError("Failed to parse saved recipes. Please try again later.");
        }
      } else {
        try {
          const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`,
          );
          if (!api.ok) {
            throw new Error("Failed to fetch data");
          }
          const recipes = await api.json();
          localStorage.setItem(
            `cuisine-${name}`,
            JSON.stringify(recipes.results),
          );
          setCuisine(recipes.results);
        } catch (error) {
          console.error("Error fetching cuisine recipes:", error);
          setError("Failed to fetch cuisine recipes. Please try again later.");
        }
      }
    };

    getCuisine(type);
  }, [type]);

  return (
    <Wrapper>
      <h3>{type} recipes</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Grid>
        {cuisine.map((item) => (
          <RecipeTile key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </RecipeTile>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Cuisine;
