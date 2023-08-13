import React from "react";
import { Paper, alpha } from '@mui/material'
import { Draggable } from 'react-beautiful-dnd'
import { IssueItem } from "../../utils/types/issue";
import { RestProps } from "../../utils/types";
import IssueContent from "./IssueContent";

type Props = {
    issue: IssueItem,
    index: number,
    status: string,
    sx?: any,
}

type IssueCardProps = Props & RestProps

const IssueCard: React.FC<IssueCardProps> = ({ issue, status, index, sx, ...props }) => {

    return (
        <>
            <Draggable draggableId={`${issue.id}`} index={index}>
                {(provided) => (
                    <Paper
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        sx={{
                            width: 1,
                            p: 1, 
                            borderRadius: 3,
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: `0 1px 2px 0 ${alpha('#919EAB', 0.16)}`,
                            '&:hover': {
                                boxShadow: `0 4px 8px 0 ${alpha('#919EAB', 0.16)}`,
                            },
                            ...sx,
                        }}
                        {...props}
                    >
                        <IssueContent
                            issue={issue}
                            status={status}
                        />
                    </Paper>
                )}
            </Draggable>
        </>
    )
}

export default IssueCard;
