import {Link} from "react-router-dom";


export const Header = () => {
    return (
      <div className={'flex justify-between mx-auto max-w-6xl items-center my-5 '}>
           <span><h1 className={'text-4xl font-bold'}>Chironzit</h1></span>

          <ul >
               <Link className={'px-2 font-semibold hover:text-indigo-600'} to={'/'}>Home</Link>
               <Link className={'px-2 font-semibold hover:text-indigo-600'} to={"/users"}>Users</Link>
               <Link className={'px-2 font-semibold hover:text-indigo-600'} to={"/contact"}>Contact</Link>
           </ul>
      </div>
    )
}