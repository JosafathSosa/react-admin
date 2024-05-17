import { Box } from "@mui/material";
import { BarChart } from "../../components/BarChart";
import { Header } from "../../components/Header";

export const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar chart" subtitle="View your charts" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};
