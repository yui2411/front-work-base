// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme, Link } from "@mui/material";


// 使用するコンポートをインポート
import { Header } from "../modules/sample/Header";
import { Mainvisual } from "../modules/sample/Mainvisual";
import { MainContent } from "../modules/sample/MainContent";
import { Footer } from "../modules/sample/Footer";

// サンプルページのメインの実装
export const SamplePage = () => {
  const title ="サンプル";
  const itemList= [
    { id:1, text:"aaa", link: "#"},
    { id:2, text:"bbb", link: "#"},
    { id:3, text:"ccc", link: "#"},
  ]
  return (
    <Box className="SamplePage" sx={sx}>
      <Box>{title}</Box>
      <Box>
      {itemList.map((item) => (
      <Box key={item.id}>
       <Link href={item.link}>{item.text}</Link>
      </Box>
     ))}
     </Box>
      <Header />
      <Mainvisual />
      <MainContent />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.SamplePage": {
    width: "100%",
    backgroundColor: {
        md:"red",
        xs:"blue",
        },
          
  },
};
