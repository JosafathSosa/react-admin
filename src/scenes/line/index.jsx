import { Box } from "@mui/material";
import { LineChart } from "../../components/LineChart";
import { Header } from "../../components/Header";

export const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Charts" subtitle="See your charts in line" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};
