import { Card, CardHeader, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import LottieIcon from "./LottieIcon";
import success from './json/success.json'
import { isString } from "lodash";
import { RestProps } from "../utils/types";

type Props = {
    cardTitle: string,
    title: string | ReactNode,
    content: string | ReactNode,
    action?: ReactNode,
}

type CompleteCardProps = Props & RestProps

const CompleteCard: React.FC<CompleteCardProps> = ({ cardTitle, title, content, action, ...props }) => {
    return (
        <Card {...props}>
            <CardHeader title={cardTitle} />
            <Stack spacing={2}>
                <LottieIcon animationData={success} />
                <Stack spacing={1} alignItems='center'>
                    {!isString(title) ? title : <Typography variant="subtitle1">
                        {title}
                    </Typography>}
                    {!isString(content) ? content : <Typography variant="body2">
                        {content}
                    </Typography>}
                </Stack>
                {action && action}
            </Stack>
        </Card>
    )
}

export default CompleteCard;
