import { Box, SxProps, Theme } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="Footer" sx={sx}>
      <Box>©︎ 2020 profile</Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Footer" : {
    width: "100%",
    textAlign: "center",
    color: "#bcddef"
  },
};
