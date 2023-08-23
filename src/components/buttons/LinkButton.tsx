import { Link } from "@mui/material";
import React from "react";
import { RestProps } from "../../utils/types";

type Props = {
    text: string,
    sx?: any,
    onClick: () => void,
}

type LinkButtonProps = Props & RestProps

const LinkButton: React.FC<LinkButtonProps> = ({ text, sx, onClick, ...props }) => {
    return (
        <Link
            type="button"
            variant="body2"
            component='button'
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
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
