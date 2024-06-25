import { Box, Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ px: { xs: 2, md: 10, lg: 15, xl: 35 } }}
      display="flex"
      flexDirection="column"
      rowGap={5}
      textAlign="center"
    >
      <Paper sx={{ mt: 3, py: 2 }}>
        <Typography>
          Copyright &copy; {new Date().getFullYear()} Shopster.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Footer;
