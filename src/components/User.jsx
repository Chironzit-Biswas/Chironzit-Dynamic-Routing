import {Link} from "react-router-dom";

export const User = ({user}) => {
    const {id,name,description,rating}=user
    return (
        <>
           <div className={'border-5 border-white py-2 m-2 px-4 bg-gray-200 p-3 rounded-xl shadow-md flex flex-col hover:scale-110 transition-all ease-in-out duration-150'}>
               <h1 className={'text-xl font-semibold'}>{name}</h1>
               <p className={'font-thin text-gray-400'}>{description}</p>
               <p>{rating}</p>
               <Link to={`/user/${id}`}>
                   <button className={'border-3 flex-grow border-white rounded-xl font-semibold my-3  px-3'}>Click Me</button>
               </Link>
           </div>
        </>
    )
}