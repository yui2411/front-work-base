import { Box, SxProps, Theme, Link } from "@mui/material";

export const Header = () => {
  const itemList = [
    { name: "About", link: "#", color: "#000" },
    { name: "Bicycle", link: "#", color: "#000" },
  ];
  return (
    <Box className="Header" sx={sx}>
        <Box className="Header-Section-Logo">Profile</Box>
      <Box>
        {itemList.map((item) => (
          <Link className="Header-Section-Link" href={item.link} color={item.color} underline="none">
            {item.name}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header": {
    width:{
      md:"60%",
      xs:"100%"
    },
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".Header-Section-Logo": {
    color: "#fff",
    fontSize: "26px",
    fontWeight: "bold",
    backgroundColor: "#000",
    padding: "4px 20px",
    margin: {
      md:"10px 0",
      xs:"10px 16px"
    },
  },
  ".Header-Section-Link": {
    margin: "0 16px",
    "&:hover": {
      opacity: 0.5,
     },
    },
};