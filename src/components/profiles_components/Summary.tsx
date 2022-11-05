import { Box, Typography, useTheme } from "@mui/material";

export function Summary() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        pb: 1,
      }}
    >
      <Typography
        variant="h5"
        color="secondary.main"
        sx={{
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        所属
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.grey[300],
          textAlign: "left",
          pl: 1,
        }}
      >
        ・京都大学情報学研究科知能情報学専攻 M1
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.grey[300],
          textAlign: "left",
          pl: 1,
        }}
      >
        ・音声メディア研究室
      </Typography>
      <Typography
        variant="h5"
        color="secondary.main"
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          pt: 1,
        }}
      >
        研究分野
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.grey[300],
          textAlign: "left",
          pl: 1,
        }}
      >
        ・離散ベイズ最適化
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.grey[300],
          textAlign: "left",
          pl: 1,
        }}
      >
        ・音声認識
      </Typography>
      <Typography
        variant="h5"
        color="secondary.main"
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          pt: 1,
        }}
      >
        資格・能力
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.grey[300],
          textAlign: "left",
          pl: 1,
        }}
      >
        ・TOEIC L&R: 945
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.grey[300],
          textAlign: "left",
          pl: 1,
        }}
      >
        ・AtCoder: 緑
      </Typography>
    </Box>
  );
}
