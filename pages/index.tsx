import Navbar from "@/app/Components/Navbar";
import Slider from "@/app/Components/Slider";
import TopNav from "@/app/Components/TopNav";

import {
  Box,
  Typography,
} from "@mui/material";

import styles from "../styles/Pages/Home.module.css";

const Home = () => {
  return (
    <Box component={"section"}>
      <Box component={"div"}>
        <TopNav />
      </Box>
      <Navbar />
      <Slider />
      <Box
        component={"div"}
        className={styles.container}
      >

      </Box>
    </Box>
  )
}
export default Home;