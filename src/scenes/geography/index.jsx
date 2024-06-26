import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { GeographyChart } from "../../components/GeographyChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Check the world map" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart />
      </Box>
    </Box>
  );
};
