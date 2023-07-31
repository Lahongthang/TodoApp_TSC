import { useState } from 'react'

const useToggle = (defaultValue: boolean = false) => {
    const [toggle, setToggle] = useState<boolean>(defaultValue)

    const handleOpen: () => void = () => {
        setToggle(true)
    }

    const handleClose: () => void = () => {
        setToggle(false)
    }

    const handleToggle: () => void = () => {
        setToggle(prev => !prev)
    }

    return {
        toggle,
        onOpen: handleOpen,
        onClose: handleClose,
        onToggle: handleToggle,
    }
}

export default useToggle;
