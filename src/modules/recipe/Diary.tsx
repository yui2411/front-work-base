import { Box, SxProps, Theme, Typography } from "@mui/material";

export const Diary = () => {
  return (
    <Box className="Diary" sx={sx}>
      <Box className="Diary-group">
          <Typography className="Diary-title">Recipe Diary</Typography>
          <Box className="Diary-text-group">
            <Box className="Diary-text">日々の料理レシピをまとめています。</Box>
          </Box>
          <Box className="Diary-text-group">
            <Box className="Diary-text">和食や洋食、中華、お菓子までいろいろな料理レシピをアップしてますので、</Box>
          </Box>
          <Box className="Diary-text-group">
            <Box className="Diary-text">みなさんの献立にお役立てくださいね！</Box>
          </Box>
        </Box>
      </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Diary" : {
    width: "100%",
  },
  ".Diary-group" : {
    textAlign: "center",
    padding: "80px 0 0 0"
  },
  ".Diary-title" : {
    display: "flex",
    fontFamily: "Helvetica Neue",
    justifyContent: "center",
    padding: "0 0 20px 0",
    fontSize: "40px",
  },
  ".Diary-text-group" :{
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    
  },
  ".Diary-text" :{
    fontFamily: "Arial",
    fontSize: "17px",
    color: "#626262",
  },
};
