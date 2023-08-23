import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { dispatch } from "../../app/store"
import { registerUi } from "../../app/redux/step/stepSlice"

export default function useStep({ uiId }: {uiId: string}) {
    const [registerId, setRegisterId] = useState<string>(uiId)
    
    useEffect(() => {
        const id = uiId ?? uuidv4()
        dispatch(registerUi({ uiId: id }))
        setRegisterId(id)
    }, [uiId])

    return {
        uiId: registerId,
    }
}
