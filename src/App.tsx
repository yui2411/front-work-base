import { Box, SxProps, Theme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { SamplePage } from './pages/SamplePage';

export const App = () => {
  return (
    <Box className="App" sx={sx}>
      <Routes>
        {/* サンプルページ */}
        <Route path="/*" element={<SamplePage />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
};
