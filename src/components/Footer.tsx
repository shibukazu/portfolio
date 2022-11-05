import { alpha, Box, Typography, useTheme } from "@mui/material";

export function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: alpha(theme.palette.secondary.main, 0.6),
        position: "sticky",
        top: "100vh",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ color: "white", textAlign: "center" }}
      >
        © 2022 Kazuki Shibutani
        <br />
        This portfolio is running on Raspberry Pi Zero.
      </Typography>
    </Box>
  );
}
