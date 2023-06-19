import { Box, SxProps, Theme, Button } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="Footer" sx={sx}>
      <Button className="Button" href="#">レシピ一覧を見る</Button>
      <Box className="SNS-link-group">
        <Button className="SNS-link" href="#" >Instagram</Button>
        <Button className="SNS-link" href="#">Twitter</Button>
        <Button className="SNS-link" href="#">Facebook</Button>
      </Box>
      <Box className="©︎">©︎ 2021  Recipe Diary</Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Footer" : {
    width: "100%",
  },

  ".Button" : {
    display: "block",
	  textAlign: "center",
	  verticalAlign: "middle",
	  textDecoration: "none",
	  width: "18%",
	  margin: "auto",
	  padding: "20px",
	  fontWeight: "bold",
	  border: "2px solid #9c9c9c",
	  color: "#9c9c9c",
  },

  ".SNS-link-group" : {
    margin: "100px 0 5px 0",
    textAlign: "center",
  },

  ".SNS-link" : {
    color: "#bcbcbc",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  },

  ".©︎" : {
    textAlign: "center",
    color: "#bcddef",
    padding: "18px",
  },
};
