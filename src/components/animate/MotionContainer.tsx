import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { motion } from 'framer-motion'
import { RestProps } from "../../utils/types";
import { varContainer } from "./variants";

type Props = {
    animate?: boolean,
    action?: boolean,
    children: ReactNode,
}

type MotionContainerProps = Props & RestProps

const MotionContainer: React.FC<MotionContainerProps> = ({ animate, action, children, ...props }) => {
    if (action) return (
        <Box component={motion.div}
            initial={false}
            animate={animate ? 'animate' : 'exit'}
            variants={varContainer()}
            {...props}>
            {children}
        </Box>
    )

    return (
        <Box component={motion.div}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={varContainer()}
            {...props}>
            {children}
        </Box>
    )
}

export default MotionContainer;
