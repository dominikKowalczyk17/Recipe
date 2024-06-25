import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, Card, Gradient } from "./StyledComponents";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check && check !== "undefined") {
      try {
        setPopular(JSON.parse(check));
      } catch (error) {
        console.error(
          "Error parsing popular recipes from localStorage:",
          error,
        );
        localStorage.removeItem("popular");
        setError("Failed to parse saved recipes. Please try again.");
      }
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`,
        );
        if (!api.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await api.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
      } catch (error) {
        console.error("Error fetching popular recipes:", error);
        setError("Failed to fetch popular recipes. Please try again.");
      }
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!error && popular.length > 0 ? (
          <Splide
            options={{
              perPage: 4,
              drag: "free",
              gap: "4rem",
            }}
          >
            {popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={"/recipe/" + recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        ) : (
          !error && <p>Loading...</p>
        )}
      </Wrapper>
    </div>
  );
}

export default Popular;
