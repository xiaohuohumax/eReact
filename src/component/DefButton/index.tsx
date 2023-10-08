import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * 默认按钮组件(去除Button的英文大写)
 */
export default styled(Button)({
    textTransform: "none",
});