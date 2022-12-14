import { Box } from "@mui/material";
import Header from "../../component/header";
import BarChart from "../../component/bar_chart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;