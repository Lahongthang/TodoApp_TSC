import { styled } from "@mui/material";
import React from "react";
import ProgressBar from "./ProgressBar";
import Image from "./Image";

const RootStyle = styled('div')(({ theme }) => ({
    right: 0,
    bottom: 0,
    zIndex: 9998,
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  }));

const LoadingScreen: React.FC = () => {
    return (
        <>
            <ProgressBar />
            <RootStyle>
                <Image
                    disabledEffect
                    altt='empty content'
                    src={'/assets/illustrations/loading_clock.svg'}
                    sx={{ height: 120 }}
                />
            </RootStyle>
        </>
    )
}

export default LoadingScreen;
