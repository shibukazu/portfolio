import { useState } from "react";
import "./App.css";
import { Box, Tab, Tabs } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Header />
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          position: "absolute",
          top: 154,
        }}
      >
        <Tab
          value={0}
          label={<span style={{ color: "white" }}>プロフィール</span>}
        />
        <Tab
          value={1}
          label={<span style={{ color: "white" }}>プロダクト</span>}
        />
      </Tabs>
      <Footer />
    </Box>
  );
}

export default App;
