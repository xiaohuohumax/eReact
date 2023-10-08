import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";

import Header from "../Header";

/**
 * 整体布局组件
 */
export default function Main() {
    return (
        <Container>
            {/* 基准样式 */}
            <CssBaseline />
            <Box mt={"2em"}><Header /></Box>
            <Box mt={"2em"}><Outlet /></Box>
        </Container>
    );
}
