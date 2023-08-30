import { useTranslation } from "react-i18next";
import React from "react";
import { Container, Typography, Button, Box, styled } from '@mui/material'
import { motion } from 'framer-motion'
import Page from "../../components/Page";
import Image from "../../components/Image";
import { Illustration404 } from '../../resources/assets'
import MotionContainer from "../../components/animate/MotionContainer";
import { varBounce } from "../../components/animate/variants";

const RootStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}))

const Page404: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'page404' })

    return (
        <Page title={t('pageTitle')} sx={{ width: '100vw', height: '100vh' }}>
            <Container maxWidth='md' component={MotionContainer} sx={{ width: 1, height: 1 }}>
                <RootStyle>
                    <motion.div variants={varBounce().in}>
                        <Typography
                            variant="h3"
                            paragraph
                            sx={{ mt: 5 }}>
                            {t('error')}
                        </Typography>
                    </motion.div>

                    <motion.div variants={varBounce().in}>
                        <Typography color={'text.secondary'} align="center">
                            {t('message')}
                        </Typography>
                    </motion.div>

                    <motion.div
                        variants={varBounce().in}
                        style={{
                            height: 0,
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            disabledEffect
                            alt='empty content'
                            src={Illustration404}
                            sx={{
                                maxWidth: 900,
                                maxHeight: 1,
                            }}
                        />
                    </motion.div>

                    <Button
                        href="/"
                        variant="contained"
                        size="large"
                        sx={{ my: 5 }}>
                        {t('goToHome')}
                    </Button>
                </RootStyle>
            </Container>
        </Page>
    )
}

export default Page404;
