import { useQuery } from "react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useEnrolled = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: enrolledClass = [], refetch } = useQuery({
        queryKey: ['enrolledClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled?email=${user?.email}`)
            return res.data;
        }
    })
    return {  enrolledClass, refetch }
}
export default useEnrolled