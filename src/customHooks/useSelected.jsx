import { useQuery } from "react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useSelected = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: myClass = [], refetch } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/select?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        }
    })
    return {  myClass, refetch }
}
export default useSelected