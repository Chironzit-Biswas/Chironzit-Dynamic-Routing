import {useLoaderData, useNavigate} from "react-router-dom";


export function UserDetails() {
    const user = useLoaderData();
    const {name,description,rating}=user
  const navigation = useNavigate()
    return (
        <div className={'h-[100vh] w-[600px] mx-auto'}>
            <div
                className={'border-5 border-white py-2 m-2 px-4 bg-gray-200 p-3 rounded-xl shadow-md  hover:scale-110 transition-all ease-in-out duration-150'}>
                <h1 className={'text-xl font-semibold'}>{name}</h1>
                <p className={'font-thin text-gray-400'}>{description}</p>
                <p>{rating}</p>

                <button
                    onClick={()=>navigation(-1)}
                    className={'border-3 flex-grow border-white rounded-xl font-semibold my-3 border-blue-70000 px-3'}>Back

                </button>

            </div>
        </div>
    );
}