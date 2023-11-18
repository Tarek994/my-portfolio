import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Navbar from "./components/navbar/Navbar";
import Container from "./home/homepage/Container";

function App() {
  const MainGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: `#fff`,
  }));

  return (
    <Router>
      <MainGrid justifyContent="center" xs={12} container maxWidth={"100%"}>
        <Navbar />
        <Grid spacing={2} xs={12} container>
          <Routes>
            <Route path="/" element={<Container />} />
          </Routes>
        </Grid>
      </MainGrid>
    </Router>
  );
}
export default App;
