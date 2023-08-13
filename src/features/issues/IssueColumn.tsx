import React from "react";
import { Button, Paper, Stack, Typography } from '@mui/material'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { IssueItem } from "../../utils/types/issue";
import { RestProps } from "../../utils/types";
import IssueCard from "./IssueCard";
import { transformToCapitalize } from "../../utils/transformText";
import Iconify from "../../components/Iconify";
import { useToggle } from "../../hooks";
import CreateUpdateIssueDialog from "./dialog/CreateUpdateIssueDialog";
import StateManager from "../../components/StateManager";
import { IssueSkeleton } from "./states/IssueSkeleton";
import EmptyContent from "../../components/EmptyContent";
import { isEmpty } from "lodash";

type Props = {
    col: any,
    index: number,
    sx?: any,
    state: 'default' | "success" | "idle" | "loading" | "empty" | "error",
}

type IssueColumnProps = Props & RestProps

const IssueColumn: React.FC<IssueColumnProps> = ({ t, col, state, index, sx, ...props }) => {
    const { toggle: openIssueDial, onOpen: onOpenIssueDial, onClose: onCloseIssueDial } = useToggle()

    return (
        <>
            <Draggable draggableId={col.id} index={index} isDragDisabled>
                {(provided) => (
                    <Paper
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        variant="outlined"
                        sx={{
                            px: 2,
                            py: 2,
                            borderRadius: 4,
                            borderStyle: 'dashed',
                            bgcolor: theme => theme.palette.grey[100],
                            ...sx
                        }}
                        {...props}
                    >
                        <Stack spacing={2} {...provided.dragHandleProps} sx={{ width: 1 }}>
                            <Typography variant="h6" textAlign='left'>{transformToCapitalize(col.label)}</Typography>
                            <Droppable droppableId={col.id} type="task">
                                {(provided) => (
                                    <Stack ref={provided.innerRef} {...provided.droppableProps} spacing={2}>
                                        <StateManager state={state === 'success' && isEmpty(col?.issues) ? 'empty' : state}
                                            loadingState={<IssueSkeleton count={col.issues?.length} />}
                                            emptyState={<EmptyContent imgProps={{ height: 104 }} />}
                                        >
                                            {col.issues?.map((issue: IssueItem, index: number) => (
                                                <IssueCard
                                                    key={issue.id}
                                                    issue={issue}
                                                    index={index}
                                                    status={col.id}
                                                />
                                            ))}
                                        </StateManager>
                                        {provided.placeholder}
                                    </Stack>
                                )}
                            </Droppable>
                            <Stack sx={{ pt: 3 }}>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    startIcon={<Iconify icon="ic:round-plus" />}
                                    sx={{
                                        '& .MuiButton-startIcon': { mr: 0.5 }
                                    }}
                                    onClick={onOpenIssueDial}
                                >
                                    Add
                                </Button>
                            </Stack>
                        </Stack>
                    </Paper>
                )}
            </Draggable>
            {openIssueDial && <CreateUpdateIssueDialog
                open={openIssueDial}
                onClose={onCloseIssueDial}
                status={col.id}
            />}
        </>
    )
}

export default IssueColumn;
