import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin: 4rem 0;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
  }
`;

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;

  & a {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-items: center;
    text-decoration: none;

    &:hover {
      div {
        background-color: #ffb347;
      }

      svg {
        fill: black;
      }

      h4 {
        color: #ffb347;
      }
    }
  }

  & svg {
    font-size: 1rem;
    justify-self: center;
    fill: white;
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1.5rem;
`;

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: black;
  margin-bottom: 0.5rem;
`;

export const RecipeTile = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }

  &:hover {
    img,
    h4 {
      transform: scale(1.05);
      transition: ease-in-out 0.2s;
    }
  }
`;

export const FormStyle = styled.form`
  margin: 0 20rem;
  display: flex;
  justify-content: center;

  & div {
    width: 100%;
    position: relative;
    min-width: 36rem;
    @media (max-width: 768px) {
      min-width: 0;
      position: initial;
    }
  }

  & input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width: 768px) {
      width: ${({ isOpen }) => (isOpen ? "calc(100vw - 4rem)" : "0")};
    }
  }

  & svg {
    position: absolute;
    font-size: 1.2rem;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    fill: white;
    cursor: pointer;

    @media (max-width: 768px) {
      left: ${({ isOpen }) => (isOpen ? "2rem" : "0.7rem")};
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    position: absolute;
    top: 7rem;
    right: ${({ isOpen }) => (isOpen ? "1rem" : "-3rem")};
    transform: translateY(-50%);
    z-index: 10;

    & div {
      width: auto;
      display: flex;
      align-items: center;
    }
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    left: -1rem;
  }
`;

export const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

export const Info = styled.div`
  margin-left: 10rem;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 2rem 0rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;

  & svg {
    font-size: 2rem;
    padding-right: 0.7rem;
  }
`;
