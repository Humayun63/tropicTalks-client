import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAuth from '../../customHooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SingleCard = ({ item }) => {
    const { class_image, class_name, price, rating, available_seats, instructor_details, _id } = item || {}
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    
    

    const handleEnroll = item => {
        if (!user) {
            Swal.fire({
                title: 'Please Login',
                text: "You have to login first!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        } else {
            const selectedItem = {
                name: user?.displayName || 'anonymous',
                email: user?.email || 'anonymous email',
                classId: _id,
                instructor_details,
                class_image,
                class_name,
                price
            }
            fetch('https://tropic-talks-server.vercel.app/select', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
            .then( res => res.json())
            .then(data => {
                console.log(data)
                if(data.message === "exists"){
                    toast.error(`Already added ${item.class_name}`)
                }
                if(data.insertedId){
                    toast.success(`${item.class_name} is added. Please checkout!`)
                }
            })
        }
    }

    return (
        <>
            <div className={`card  glass ${available_seats == 0 ? 'bg-red-400' : 'bg-green-300'}`}>
                <figure><img className='w-full h-36' src={class_image} alt={class_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{class_name}</h2>
                    <div>
                        <p className='text-lg my-1 font-medium'>Instructor Name: <span className='font-normal'>{instructor_details.instructor_name}</span></p>
                        <p className='text-lg my-1 font-medium'>Available Seats: <span className='font-normal'>{available_seats}</span></p>
                        <p className='text-lg my-1 font-medium'>Price: <span className='font-normal'> ${price}</span></p>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn" onClick={() => handleEnroll(item)} disabled={available_seats == 0}>Enroll Now!</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCard;