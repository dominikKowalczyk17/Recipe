import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FormStyle } from "./StyledComponents";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setinput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setinput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}
export default Search;
