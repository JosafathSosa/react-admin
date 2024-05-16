import React from "react";
import { Header } from "../../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m="20px"
      >
        <Header title="Dashboard" subtitle="Welecome to your dashboards" />
      </Box>
    </Box>
  );
};

export default Dashboard;
