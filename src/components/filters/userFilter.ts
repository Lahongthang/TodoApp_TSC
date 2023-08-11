import { useEffect, useState } from "react"
import { v4 as uuidv4} from 'uuid'
import { hasRegistered, registerUi } from "../../app/redux/filter/filterSlice"
import { dispatch, useSelector } from "../../app/store"

export default function useFilter({
    fixedKey, defaultValues
}: {
    fixedKey?: string, defaultValues?: any
}) {
    const [registerId, setRegisterId] = useState<any>(fixedKey)

    const isExisted = useSelector((state: any) => hasRegistered(state, registerId))

    useEffect(() => {
        setRegisterId(fixedKey ?? uuidv4())
    }, [fixedKey])

    useEffect(() => {
        if (!isExisted) dispatch(registerUi({ uiId: registerId, defaultValues }))
    }, [registerId])

    return {
        isExisted,
        uiId: registerId,
    }
}
