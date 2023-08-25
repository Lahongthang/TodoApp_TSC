import React, { ReactNode } from "react";
import { Card, CardHeader, CardContent, CardActions } from '@mui/material'
import { isFunction } from "lodash";
import { RestProps } from "../../../utils/types";

type Props = {
    title: string,
    children: ReactNode,
    renderActions?: () => ReactNode,
}

type RootCardProps = Props & RestProps

const RootCard: React.FC<RootCardProps> = ({ title , children, renderActions }) => {
    return (
        <Card sx={{ width: 1, p: 3 }}>
            <CardHeader title={title} />
            <CardContent>
                {children}
            </CardContent>
            {isFunction(renderActions) && <CardActions>
                {renderActions()}
            </CardActions>}
        </Card>
    )
}

export default RootCard;
