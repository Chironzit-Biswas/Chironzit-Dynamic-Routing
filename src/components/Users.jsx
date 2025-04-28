import {useLoaderData} from "react-router-dom";
import {User} from "./User.jsx";

export const Users = () => {
    const users =useLoaderData()
    return (
        <>
           <div>
                <h1>Hi I am User {users.length}</h1>
               <div className={'grid md:grid-cols-3 '}>
                   {
                       users.map(user => <User user={user}></User>)
                   }
               </div>

           </div>
        </>
    )
}