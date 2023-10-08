import { CircularProgress, Box } from "@mui/material";

/**
 * loading组件
 */
export default function Loading() {
    return (
        <Box width="100%" textAlign="center" padding="2em">
            <CircularProgress />
        </Box>
    );
}