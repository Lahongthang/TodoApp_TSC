import { useTranslation } from "react-i18next";
import React, { useMemo } from "react";
import { Tab, Tabs } from "@mui/material";
import Iconify from "../../../components/Iconify";
import { useTabs } from "../../../hooks";
import GeneralContainer from './general'
import SecurityContainer from './security'

const iconStyles = {
    width: 18, height: 18,
}

const getTabs = (t: any) => ([
    {
        value: 'general',
        label: t(`tabs.general`),
        icon: <Iconify icon="ic:round-account-box" sx={iconStyles} />,
        component: <GeneralContainer />,
    },
    // {
    //     value: 'email',
    //     label: t(`tabs.email`),
    //     icon: <Iconify icon="ic:round-email" sx={iconStyles} />,
    //     component: <>Email</>,
    // },
    {
        value: 'security',
        label: t(`tabs.security`),
        icon: <Iconify icon="ic:round-vpn-key" sx={iconStyles} />,
        component: <SecurityContainer />,
    },
]);

const PersonalSettingContainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'personalSettings' })

    const tabs = useMemo(() => getTabs(t), [t])

    const { currentTab, onChangeTab } = useTabs(tabs[0].value)

    return (
        <>
            <Tabs
                value={currentTab}
                onChange={onChangeTab}
                sx={{ mb: 3 }}
            >
                {tabs.map((tab) => (
                    <Tab
                        key={tab.value}
                        label={tab.label}
                        icon={tab.icon}
                        value={tab.value}
                    />
                ))}
            </Tabs>
            {tabs.find((tab) => tab.value === currentTab)?.component}
        </>
    )
}

export default PersonalSettingContainer;
