import { Typography } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Oops
      </Typography>
      <Typography variant="h5" gutterBottom>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occurred."}
      </Typography>
    </>
  );
};

export default ErrorPage;
