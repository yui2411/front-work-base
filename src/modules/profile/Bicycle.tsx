import { Box, SxProps, Theme, Typography } from "@mui/material";
import bicycle1 from "../../resources/work1/images/bicycle1.jpg";
import bicycle2 from "../../resources/work1/images/bicycle2.jpg";
import bicycle3 from "../../resources/work1/images/bicycle3.jpg";

export const Bicycle = () => {
  const itemList = [
    {title: "タイトル", text: "テキスト", image: bicycle1},
    {title: "タイトル", text: "テキスト", image: bicycle2},
    {title: "タイトル", text: "テキスト", image: bicycle3},
  ];
  return (
    <Box className="Bicycle" sx={sx}>
      <Typography className="Bicycle-Title" variant="h3">Bicycle</Typography>
      <Box className="Bicycle-Content">
      {itemList.map((item) => (
          <Box className="Bicycle-Content-Item">
          <img className="Bicycle-Content-Item-Image" src={item.image} alt="自転車1" />
          <Typography className="Bicycle-Content-Item-Title">{item.title}</Typography>
          <Box className="Bicycle-Content-Item-Text">{item.text}</Box>
        </Box>
        )
        )}
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Bicycle" : {
    width: {
      md:"60%",
      xs:"100%",
    },
    margin: "100px auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  ".Bicycle-Title" : {
    display: "inline-flex",
    fontWeight: "bold",
    margin:"0 auto",
    borderBottom: "1px solid #000",
  },
  ".Bicycle-Content":{
    marginTop: "50px",
    display: "flex",
    flexDirection: {
      md:"row",
      xs:"column",
    },
    justifyContent: "space-between",
    width: "100%",
  },
  ".Bicycle-Content-Item":{
    display: "flex",
    width: {
      md:"32%",
      xs:"90%",
    },
    margin: {
      xs:"20px auto",
    },
    flexDirection: "column",
    justifyContent: "center",
  },
  ".Bicycle-Content-Item-Image":{
    maxWidth: "100%",
  },
  ".Bicycle-Content-Item-Title":{
    marginTop: "12px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
  ".Bicycle-Content-Item-Text":{
    marginTop: "12px",
    textAlign: "center",
  },
};