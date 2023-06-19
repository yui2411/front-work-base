import { Box, SxProps, Theme } from "@mui/material";
import runchtable from "../../resources/work2/images/mainvisual.jpg"

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <img className="Mainvisual-Image" src={runchtable} alt="runchtable" ></img>
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
