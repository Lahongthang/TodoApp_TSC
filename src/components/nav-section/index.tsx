import React from "react";
import { Stack } from '@mui/material'
import { Nav } from "./type";
import Navlist from "./NavList";


type NavSectionProps = {
    navConfigs: Nav[],
}

const NavSection: React.FC<NavSectionProps> = ({ navConfigs }) => {
    return (
        <Stack spacing={1}
            direction='row'
            sx={{ width: 1 }}
            alignItems='center'
            justifyContent='center'>
            {navConfigs.map((item: Nav, index) => (
                <Navlist key={index} item={item} depth={1} />
            ))}
        </Stack>
    )
}

export default NavSection;
