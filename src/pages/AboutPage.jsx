import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <h2>About Shopster</h2>
      <div>
        This is a simple ReactJs Task built throught the Frontend internship
        program at{" "}
        <Link to="https://www.foothillsolutions.com/" target="_blank">
          Foothill Technology Solutions.
        </Link>
      </div>
      <h2>Technologies Used</h2>
      <ul>
        <li>
          <Link to="https://react.dev/">ReactJs:</Link> React Context, Provider
          and Reducer for managing application state.
        </li>
        <li>
          <Link to="https://reactrouter.com/en/main">React Router DOM:</Link>{" "}
          for making routes between pages.
        </li>
        <li>
          <Link to="https://mui.com/">Material UI:</Link> Library for building
          user interfaces.
        </li>
      </ul>
      <h2>Owner</h2>
      <div>
        <b>Jamal SaadEddin</b>
      </div>
      <ul>
        <li>
          <Link to="https://github.com/Jamal-SaadEddin/" target="_blank">
            @GitHub
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/jamalsaadeddin/"
            target="_blank"
          >
            @LinkedIn
          </Link>
        </li>
        <li>
          <Link to="https://jamalsaadeddin.netlify.app/" target="_blank">
            @Portfolio
          </Link>
        </li>
        <li>
          <Link to="mailto:jamalsaadeddin27@gmail.com" target="_blank">
            @Business Contact
          </Link>
        </li>
      </ul>
    </Paper>
  );
};

export default AboutPage;
