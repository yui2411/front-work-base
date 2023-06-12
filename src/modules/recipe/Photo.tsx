import { Box, SxProps, Theme } from "@mui/material";
import img1 from "../../resources/work2/images/recipe1.jpg";
import img2 from "../../resources/work2/images/recipe2.jpg";
import img3 from "../../resources/work2/images/recipe3.jpg";

export const Photo = () => {
  return (
    <Box className="Photo" sx={sx}>
      <Box className="Photo-content">
        <Box className="Photo-img">
          <img className="Pho-img" src={img1} alt="img1" />
        </Box>
        <Box className="Photo-img">
          <img className="Pho-img" src={img2} alt="img2" />
        </Box>
        <Box className="Photo-img">
        <img className="Pho-img" src={img3} alt="img3" />
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Photo" : {
    width: "100%",
  },

  ".Photo-content" : {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  ".Photo-img" :{
    display: "flex",
    flexDirection: "column",
    width: "50%",
    padding: "100px 0 100px 0",
  },

  ".Pho-img" :  {
    width: "100%",
    height: "100%",
    border: "1px solid #a1a1a1",
  },
};
