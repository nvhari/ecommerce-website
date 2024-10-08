import Button from "@mui/material/Button";
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="header-search ml-3 mr-3">
      <input type="text" placeholder="Search for products..." />
      <Button>
        <IoSearchOutline />
      </Button>
    </div>
  );
};

export default SearchBox;
