
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";

const CountryDropdown = () => {
  return (
    <Button className="country-drop">
      <div className="info d-flex flex-column">
        <span className="label">Your Location</span>
        <samp className="name">india</samp>
      </div>
      <span className="ml-auto"><FaAngleDown /></span>
    </Button>
  );
};

export default CountryDropdown;
