import { useQuery } from "react-query"

const usePopular = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://tropic-talks-server.vercel.app/popular-classes')
            return res.json()
        }
    })
    return { classes, refetch }
}
export default usePopular