import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Navbar from "./components/navbar/Navbar";

function App() {
  const MainGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: `#fff`,
  }));

  return (
    <Router>
      <MainGrid justifyContent="center" xs={12} container maxWidth={"100%"}>
        <Navbar />
        <Grid maxWidth="lg" spacing={2} xs={12} container>
          <Routes>
            
          </Routes>
        </Grid>
      </MainGrid>
    </Router>
  );
}
export default App;
