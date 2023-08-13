import { useTranslation } from 'react-i18next';
import React, { useMemo } from 'react'
import { Stack } from '@mui/material'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import IssueColumn from './IssueColumn';
import { issueApi, useSearchIssueQuery } from '../../app/services/issue/issueApi';
import { dispatch } from '../../app/store';
import { IssueStatus } from '../../utils/types/issue';
import { specifyState } from '../../components/StateManager';
import { IssueStatues, groupIssueByStatus } from './utils';
import useFilterParams from '../../components/filters/useFilterParams';
import { useAuth } from '../../hooks';
import { formatDate } from '../../utils/requestHelper';

const IssueManagement: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    const { auth } = useAuth()
    const { values } = useFilterParams()
    const { type, priority, assignee, time, keyword = '' } = values ?? {}
    const { fromDate, toDate } = time?.period ?? {}

    const params = useMemo(() => ({
        type,
        priority,
        assignee,
        startDate: fromDate ? formatDate(new Date(fromDate)) : null,
        endDate: toDate ? formatDate(new Date(toDate)) : null,
        keyword,
    }), [type, priority, keyword, assignee, time])

    const response = useSearchIssueQuery(params)
    const state = specifyState(response)
    const { data: issues } = response ?? {}

    const issueStatuses = useMemo(() => IssueStatues(t), [t])

    const issueColumns = groupIssueByStatus(issues, issueStatuses)

    const colNum = Object.keys(issueColumns).length

    const onDragEnd = async (result: any) => {
        const { draggableId, destination } = result
        const updatedStatusId = issueStatuses?.find((status: IssueStatus) => status.name === destination?.droppableId)?.id
        if (!updatedStatusId) return
        const bodyData = {
            status: updatedStatusId,
            updatedBy: auth.user?.id,
        }
        try {
            await dispatch(issueApi.endpoints.updateStatus.initiate({ id: Number(draggableId), data: bodyData })).unwrap()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="all-columns" type="column" direction="vertical" >
                {(provided) => (
                    <Stack
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        spacing={3}
                        direction='row'
                        alignItems='flex-start'
                        sx={{
                            height: 1,
                            overflow: 'hidden',
                        }}
                    >
                        {Object.values(issueColumns)?.map((col: any, index: number) => (
                            <IssueColumn t={t}
                                key={col.id}
                                index={index}
                                col={col}
                                state={state}
                                sx={{ width: `calc(100% / ${colNum})` }}
                            />
                        ))}
                        {provided.placeholder}
                    </Stack>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default IssueManagement;
