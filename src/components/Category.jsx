import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { List, CircleContainer } from "./StyledComponents";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <NavLink to={"/cuisine/Italian"}>
        <CircleContainer>
          <FaPizzaSlice />
        </CircleContainer>
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <CircleContainer>
          <FaHamburger />
        </CircleContainer>
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <CircleContainer>
          <GiNoodles />
        </CircleContainer>
        <h4>Thai Food</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"}>
        <CircleContainer>
          <GiChopsticks />
        </CircleContainer>
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
};

export default Category;
