import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Footer = () => {
  return <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Made with <span color="danger">❤</span> by{" "}
      <a href="https://csb-em0wuy.netlify.app/" target="_blank">
        Bharathwaj Ravi</a>
    </Typography>
  </Box>
}

export default Footer;