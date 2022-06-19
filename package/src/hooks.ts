import { useContext, useMemo } from 'react';
import { HistoryContext, MatchContext, LocationContext } from './components/Router';

export const useRouter = () => {
    const history = useContext(HistoryContext)
    const match = useContext(MatchContext)
    const location = useContext(LocationContext)

    const searchParams = useMemo(() => {
        const searchs = location.search.slice(1).split('&')
        return searchs.reduce((obj: any, cur: string) => {
            const splitCur = cur.split('=')
            obj[splitCur[0]] = splitCur[1]
            return obj
        }, {})
    }, [location.search])

    return {...history, match, searchParams}
}
