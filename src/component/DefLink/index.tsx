import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * 链接跳转组件(mui \<Link\>, react-router-dom \<Link\> 两者结合)
 */
export default function DefLink(props: LinkProps) {
    return (
        <MuiLink {...props} component={Link} to={props.href ?? "#"} />
    );
}