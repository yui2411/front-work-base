import { Box, SxProps, Theme } from "@mui/material";
import { Header } from "../modules/sample/Header";
import { Mainvisual } from "../modules/sample/Mainvisual";
import { MainContent } from "../modules/sample/MainContent";
import { Footer } from "../modules/sample/Footer";

export const SamplePage = () => {
  return (
    <Box className="TopPage" sx={sx}>
      <Header />
      <Mainvisual />
      <MainContent />
      <Footer />
    </Box>
  );
};

const sx: SxProps<Theme> = {};
