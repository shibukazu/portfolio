import { alpha, Box, Grid, Typography, useTheme } from "@mui/material";

export function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,

        width: "100%",
        backgroundColor: alpha(theme.palette.secondary.main, 0.6),
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
