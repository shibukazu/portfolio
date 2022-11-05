import { Box } from "@mui/material";
import { MyHistory } from "./profiles_components/MyHistory";
import { Summary } from "./profiles_components/Summary";

export function Profiles() {
  return (
    <Box>
      <Summary />
      <MyHistory />
    </Box>
  );
}
