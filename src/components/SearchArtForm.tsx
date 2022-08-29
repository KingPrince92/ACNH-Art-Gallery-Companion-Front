import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchArtForm.css";

const SearchArtForm = () => {
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/search?${new URLSearchParams({ query: inquiry })}`);
    setInquiry("");
  };

  return (
    <form className="SearchArtForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="inquiry"></label>
      <div className="classinput">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          name="inquiry"
          id="inquiry"
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          placeholder="Search Art"
        />
      </div>
    </form>
  );
};

export default SearchArtForm;
