import { useState, useTransition } from 'react'

const useTabs = (defaultValues: string) => {
    const [ isPending, startTransition] = useTransition()
    const [currentTab, setCurrentTab] = useState(defaultValues ?? '')

    const onChangeTab = (event: any, newValue: string) => {
        startTransition(() => {
            setCurrentTab(newValue)
        })
    }

    return {
        currentTab,
        onChangeTab,
        setCurrentTab,
    }
}

export default useTabs;
