// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Mainvisual } from "../modules/recipe/Mainvisual";
import { Diary } from "../modules/recipe/Diary";
import { Photo } from "../modules/recipe/Photo";
import { Footer } from "../modules/recipe/Footer";

// サンプルページのメインの実装
export const RecipePage= () => {
  return (
    <Box className="RecipePage" sx={sx}>
      <Mainvisual />
      <Diary />
      <Photo />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.RecipePage": {
    width: "100%",    
  }
};
