import { useTranslation } from "react-i18next";
import React, { useMemo } from "react";
import { MenuItem, Stack, Checkbox, Typography, Avatar } from '@mui/material'
import FilterButtonPopover from "../../../components/filters/buttons/FilterButtonPopover";
import useFilterParams from "../../../components/filters/useFilterParams";
import { User } from "../../../utils/types/issue";
import { useGetAllUserQuery } from "../../../app/services/user/userApi";
import { specifyState } from "../../../components/StateManager";
import { getFilterLabel } from "./utils";

const FilterAssignee: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    const { values, setParam } = useFilterParams()
    const { assignee } = values ?? {}

    const response = useGetAllUserQuery({})
    const { data: users } = response
    const state = specifyState(response)

    const convertedUsers = useMemo(() => {
        return users?.map((user: User) => ({...user, label: user.username}))
    }, [users])

    const handleFilter = (value: any) => {
        setParam('assignee', value)
    }

    const handleReset = () => {
        setParam('assignee', null)
    }

    const label = useMemo(() => {
        return getFilterLabel(t, 'assignee', convertedUsers, assignee)
    }, [t, assignee, convertedUsers])

    return (
        <FilterButtonPopover
            label={label}
            state={state}
            value={assignee}
            onReset={handleReset}
            onSelect={handleFilter}
            options={convertedUsers}
            title={t('filters.assignee.title')}
            renderItem={(item, selected, handleChange) => (
                <MenuItem key={item.id} selected={selected} onClick={() => handleChange(item)}>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <Checkbox size="small" checked={selected} sx={{ p: 0 }} />
                        <Stack spacing={0.5} direction='row' alignItems='center'>
                            {item.avatar ? (
                                <Avatar
                                    src={item.avatar}
                                    alt={item.username}
                                    sx={{ width: 22, height: 22 }}
                                />
                            ) : (
                                <Avatar sx={{ width: 22, height: 22 }}>
                                    {item.username.slice(0, 1)}
                                </Avatar>
                            )}
                            <Typography variant="body1">
                                {item.label}
                            </Typography>
                        </Stack>
                    </Stack>
                </MenuItem>
            )}
        />
    )
}

export default FilterAssignee;
