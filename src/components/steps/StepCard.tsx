import React, { ReactNode } from "react";
import { Card, CardHeader, CardContent, CardActions } from '@mui/material'
import { RestProps } from "../../utils/types";

type Props = {
    title: string,
    children: ReactNode,
    renderActions: () => ReactNode,
}

type StepCardProps = Props & RestProps

const StepCard: React.FC<StepCardProps> = ({ title, children, renderActions, ...props }) => {
    return (
        <Card {...props}>
            <CardHeader title={title} />
            <CardContent>
                {children}
            </CardContent>
            <CardActions>
                {renderActions()}
            </CardActions>
        </Card>
    )
}

export default StepCard;
