import { useCallback, useContext } from "react";
import { SearchHistoryContext } from "./SearchHistoryProvider";
import { dispatch, useSelector } from "../../../app/store";
import { selectHistory, addKeyword as addKeywordAction } from "../../../app/redux/search-history/searchHistorySlice";

export default function useSearchHistory() {
    const { uiId }: any = useContext(SearchHistoryContext)
    const history = useSelector((state) => selectHistory(state, uiId))

    const addKeyword = useCallback((keyword: string) => {
        if (uiId && keyword) dispatch(addKeywordAction({ uiId, keyword }))
    }, [uiId])

    return {
        history,
        addKeyword,
    }
}
