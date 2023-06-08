import { useForm } from "react-hook-form";
import useAuth from "../../../../customHooks/useAuth";
import Swal from "sweetalert2";

const AddFrom = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    console.log(img_hosting_token)
    const onSubmit = (data) => {
        console.log(data.image);

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                console.log(imageRes)

                if (imageRes.success) {
                    const { class_name, available_seats, price } = data;
                    const newClass = {
                        class_name,
                        class_image: imageRes.data.display_url,
                        available_seats: parseFloat(available_seats),
                        price: parseFloat(price),
                        status: 'pending',
                        rating: 4,
                        instructor_details: {
                            instructor_name: user.displayName,
                            instructor_image: user?.photoURL,
                            instructor_email: user.email
                        }
                    }

                    fetch('http://localhost:5000/classes', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                        },
                        body: JSON.stringify(newClass)
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset()
                            }
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            })
            .catch(error => {
                console.log(error)
            });
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <form className=" w-full bg-green-300 shadow-xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class_name">
                        Class Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="class_name"
                        type="text"
                        name="class_name"
                        placeholder="Enter class name"
                        {...register("class_name", { required: true })}
                    />
                    {errors.class_name && <p className="text-red-500 text-xs italic">Class Name is required</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="available_seats">
                        Available Seats
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="available_seats"
                        type="number"
                        name="available_seats"
                        placeholder="Enter available seats"
                        {...register("available_seats", { required: true })}
                    />
                    {errors.available_seats && <p className="text-red-500 text-xs italic">Available Seats is required</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        name="price"
                        placeholder="Enter price"
                        {...register("price", { required: true })}
                    />
                    {errors.price && <p className="text-red-500 text-xs italic">Price is required</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructor_name">
                        Instructor Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="instructor_name"
                        type="text"
                        name="instructor_name"
                        value={user.displayName}
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructor_email">
                        Instructor Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="instructor_email"
                        type="text"
                        name="instructor_email"
                        value={user.email}
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Class Image
                    </label>
                    <input type="file" className="file-input w-full max-w-xs" {...register("image", { required: true })} />
                    {errors.image && <p className="text-red-500 text-xs italic">Class Image is required</p>}
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="btn"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFrom;
