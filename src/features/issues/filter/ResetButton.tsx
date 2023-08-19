import { useTranslation } from "react-i18next";
import React from "react";
import { Chip, Typography } from '@mui/material'
import Iconify from "../../../components/Iconify";
import useFilterParams from "../../../components/filters/useFilterParams";

const ResetButton: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    const { reset } = useFilterParams()

    return (
        <Chip
            label={<Typography variant="subtitle2">
                {t('filters.resetBtn')}
            </Typography>}
            onClick={reset}
            sx={{ borderRadius: 3 }}
            color="warning"
            icon={<Iconify icon="bx:reset" sx={{ width: 20, height: 20 }} />}
        />
    )
}

export default ResetButton;
