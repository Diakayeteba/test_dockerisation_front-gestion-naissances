import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


type User = {
   id: string;
    gender: string;     // Le ? évite l'erreur car l'API n'a pas de genre
    picture: string;
    firstName?: string;  // Le ? évite l'erreur car l'API utilise "name"
    lastName?: string;
    birthDate: string;
    email?: string;
    phone?: number | string; // Permet d'accepter les numéros sous forme de texte de l'API
    address?: string;
    about?: string;
    };

function UserDetails() {

    let { userId } = useParams();
     const [user, setUser] = useState<User>();
     const getOneUser = async() => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const user = await response.json();
        setUser(user);
     };
   useEffect (() => {
    getOneUser();

    }, []);
  return (
    <article> 
        <div className="flex">
            <div className="">
                <h3 className="text-lg  border border-gray-500">
                        {user?.gender} {user?.firstName} {user?.lastName}
                    </h3>
                    <p className="text-base ">{user?.email}</p>
                    <p className="text-base ">{user?.phone}</p></div>
        </div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
     </article>
  )
}

export default UserDetails