import React from "react";
import { Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import { RestProps } from "../../utils/types";

type Props = {
    text: string,
    to: string,
    sx?: any,
}

type LinkButtonProps = Props & RestProps

const LinkButton: React.FC<LinkButtonProps> = ({ text, to, sx, ...props }) => {
    return (
        <Link
            to={to}
            variant="body2"
            component={RouterLink}
            sx={{
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline'},
                ...sx,
            }}
            {...props}
        >
            {text}
        </Link>
    )
}

export default LinkButton;
