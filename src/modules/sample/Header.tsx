import { Box, SxProps, Theme } from "@mui/material";

export const Header = () => {
　return (
    <Box className="Header" sx={sx}>
      ヘッダー
    </Box>
  );
};

const sx: SxProps<Theme> = {
"&.Header" : {
  width: "100%",
  // レスポンシブデザインの定義
  backgroundColor: {
    md:"red",
    xs:"blue",
    },
  },
};
