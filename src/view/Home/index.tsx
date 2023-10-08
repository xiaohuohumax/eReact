import { Card, Box, Typography, Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getArticle } from "@/api/article";
import { Article } from "@/entity/article";

export default function Home() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [open, setOpen] = useState(false);
    const [flag, setFlag] = useState({
        success: true,
        msg: ""
    });

    const articleSum = 10;

    useEffect(() => {
        // 获取随机文章
        getArticle({ sum: articleSum })
            .then(res => setArticles(res.data))
            .catch(err => {
                setOpen(true);
                setFlag({ success: false, msg: err.message });
            });
    }, []);

    const { t } = useTranslation();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                    {flag.msg}
                </Alert>
            </Snackbar>
            {flag.success
                ? articles.map(item =>
                    <Box mb="2em" key={item.id}>
                        <Card sx={{ padding: "1em" }}>
                            <Typography variant="h5" gutterBottom fontWeight={700}>
                                {item.title}
                            </Typography>
                            <Box><strong>{t("homeArticle.author")}</strong>: {item.author}</Box>
                            <Box mt=".5em">{item.body}</Box>
                            <Box textAlign="right" fontSize=".9em">
                                <strong>{t("homeArticle.time")}</strong>: {item.createTime}
                            </Box>
                        </Card>
                    </Box>
                )
                : <Alert severity="error" sx={{ width: "100%" }}>
                    {flag.msg}
                </Alert>
            }
        </Box>
    );
}
