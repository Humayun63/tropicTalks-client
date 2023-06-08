import { useQuery } from "react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useAllClass = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: allClass = [], refetch } = useQuery({
        queryKey: ['allClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/all-class`)
            return res.data;
        }
    })
    return { allClass, refetch }
}
export default useAllClass