import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, Card, Gradient } from "./StyledComponents";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVeggie = async () => {
      const check = localStorage.getItem("veggie");

      if (check && check !== "undefined") {
        try {
          setVeggie(JSON.parse(check));
        } catch (error) {
          console.error(
            "Error parsing veggie recipes from localStorage:",
            error,
          );
          localStorage.removeItem("veggie");
          setError("Failed to parse saved recipes. Please try again later.");
        }
      } else {
        try {
          const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}&number=9`,
          );
          if (!api.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await api.json();
          localStorage.setItem("veggie", JSON.stringify(data.results));
          setVeggie(data.results);
        } catch (error) {
          console.error("Error fetching veggie recipes:", error);
          setError("Failed to fetch veggie recipes. Please try again later.");
        }
      }
    };

    getVeggie();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Veggie Picks</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!error && veggie.length > 0 ? (
          <Splide
            options={{
              perPage: 3,
              drag: "free",
              gap: "4rem",
              breakpoints: {
                1200: {
                  perPage: 2,
                  gap: "2rem",
                },
                768: {
                  perPage: 1,
                  gap: "1.5rem",
                },
                480: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
            }}
          >
            {veggie.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          !error && <p>Loading...</p>
        )}
      </Wrapper>
    </div>
  );
}

export default Veggie;
