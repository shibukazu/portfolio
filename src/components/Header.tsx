import { Avatar, Box, Grid, Typography } from "@mui/material";

export function Header() {
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: {
            xs: "200px",
          },
          width: "100%",
          backgroundImage: "url(/profile_background.jpg)",
          backgroundSize: "cover",
          filter: "brightness(0.7)",
        }}
      ></Box>
      <Grid
        container
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: {
            xs: "200px",
          },
          width: "100%",
        }}
      >
        <Grid
          container
          xs={9}
          direction="row"
          sx={{
            alignItems: "center",
            pl: 2,
          }}
        >
          <Grid item>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              渋谷 和樹
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", textAlign: "left" }}
            >
              京都大学 情報学研究科 <br />
              ソフトウェアエンジニア
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={3}
          sx={{
            alignItems: "center",
            pr: 2,
          }}
        >
          <Avatar
            src="/profile.jpg"
            sx={{
              height: {
                xs: "80px",
              },
              width: {
                xs: "80px",
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
