import { forwardRef } from "react";
import { ListItemText } from '@mui/material'
import { useLocation, useNavigate } from "react-router-dom";
import { RestProps } from "../../utils/types";
import { Nav } from "./type";
import { ListItemIconStyle, ListItemStyle } from "./styles";
import { getActive } from "./utils";
import { useTranslation } from "react-i18next";

type NavItemProps = {
    item: Nav,
    open: boolean,
} & RestProps

const NavItem: React.FC<NavItemProps> = forwardRef(({ item, open, ...props }, ref: any) => {
    const { t } = useTranslation('translations', { keyPrefix: 'navbar' })

    const { pathname } = useLocation()

    const navigate = useNavigate()

    const { title, path, icon, children } = item

    const active = getActive(path, pathname)

    const handleClick = () => {
        if (!children) navigate(path)
    }

    return (
        <ListItemStyle
            ref={ref}
            open={open}
            active={active}
            onClick={handleClick}
            {...props}
        >
            <ListItemIconStyle>
                {icon}
            </ListItemIconStyle>
            <ListItemText
                primary={t(`${title}`)}
                primaryTypographyProps={{
                    variant: 'subtitle2',
                }}
            />
        </ListItemStyle>
    )
})

export default NavItem;
