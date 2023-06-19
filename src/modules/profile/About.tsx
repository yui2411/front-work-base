import { Box, SxProps, Theme, Typography } from "@mui/material";
import profileimg from "../../resources/work1/images/about.jpg"

export const About = () => {
  return (
    <Box className="About" sx={sx}>
      <Typography className="About-title" variant="h3">About</Typography>
      <Box className="About-content">
        <img className="About-img" src={profileimg} alt="profileimg" />
        <Box className="About-profile">
          <Typography className="About-name">KAKERU MIYAICHI</Typography>
          <Box className="About-text">📕📕📕📕📕📕📕📕📕📕📕</Box>
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: {
      md:"60%",
      xs:"100%",
    },
    margin: "100px auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  ".About-title" : {
    display: "inline-flex",
    fontWeight: "bold",
    margin:"0 auto",
    borderBottom: "1px solid #000",
  },
  ".About-content" : {
    margin:"50px auto 0",
    display: "flex",
    flexDirection: {
      md:"row",
      xs:"column",
    },
    justifyContent: "center",
  },
  ".About-img" :  {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid #a1a1a1",
    margin:{
      md:"0 30px",
      xs:"30px auto"
    },
  },
  ".About-profile" :{
    width: "400px",
    margin: "17px",
  },
  ".About-name" :{
    fontSize: "30px",
    color: "#626262",
    margin: "8px",
  },
  ".About-text" : {
    fontSize: "17px",
    margin: "7px",
  },
};
