import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FormStyle, CloseIcon } from "./StyledComponents";

function Search() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <FormStyle
      onClick={handleSearchClick}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <div>
        {isOpen ? (
          <CloseIcon onClick={handleCloseClick}>
            <FaTimes />
          </CloseIcon>
        ) : (
          <FaSearch />
        )}
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

export default Search;
