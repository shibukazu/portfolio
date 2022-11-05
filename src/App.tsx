import { useState } from "react";
import "./App.css";
import { Box, Tab, Tabs } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { Profiles } from "./components/Profiles";
import { TechStacks } from "./components/TechStacks";

type TabPanelProps = {
  children?: React.ReactNode;
  value: number;
  index: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <Box
      role="tabpanel"
      sx={{
        id: `tabpanel-${index}`,
        position: "absolute",
        top: "200px",
        left: 0,
        height: "100%",
        width: "100%",
        visibility: value != index ? "hidden" : "visible",
      }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      <Footer />
    </Box>
  );
}

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className="app">
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
        <Tab
          value={2}
          label={<span style={{ color: "white" }}>技術スタック</span>}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <Profiles />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Products />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TechStacks />
      </TabPanel>
    </Box>
  );
}

export default App;
