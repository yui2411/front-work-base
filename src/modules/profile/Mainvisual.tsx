import { Box, SxProps, Theme } from "@mui/material";
import bicycle from "../../resources/work1/images/bicycle1.jpg"

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <img className="Mainvisual-Image" src={bicycle} alt="bicycle" ></img>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
  ".Mainvisual-Image" : {
    objectfit: "contain",
    width : "100%",
  }
};
