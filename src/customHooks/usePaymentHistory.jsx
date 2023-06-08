import { useQuery } from "react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const usePaymentHistory = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['paymentHistory'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payment-history?email=${user?.email}`)
            return res.data;
        }
    })
    return {  payments, refetch }
}
export default usePaymentHistory