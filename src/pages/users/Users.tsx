import { useEffect, useState } from "react";
import { USERS } from "../../utils/data";
import { Link } from "react-router-dom";

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
type Props = {
    users : User[];
};

 //Destructure les props
    //const users = props.users;
    //const {users} = props;
function Users() {
    //le Hook
    const[usersSorted, setUsersSorted]= useState<User[]>(USERS);
    const[alphabetOrder, setAlphabetOrder]= useState(1);
    const sortBy = (field: string, value: string) => {
        console.log(field)
        const result = usersSorted.sort((firstUser: User, secondUser: User) => {
            const fieldInFirstUser = firstUser[field as keyof User] || "";
            const fieldInSecondUser = secondUser[field as keyof User] || "";
            console.log(fieldInFirstUser, fieldInSecondUser);

            let order = 1;
            if (value === "male" || value === "-1" ){
                order = -1;
            }

            let sortResult = 0;
            if (fieldInFirstUser > fieldInSecondUser){
                sortResult = 1;
            }
            if (fieldInFirstUser < fieldInSecondUser){
                sortResult = -1;
            }

            return sortResult * order;

        });
        setUsersSorted([...result]);

        };

          const sortAlphabetically = () => {
      
        const result = usersSorted.sort((firstUser: User, secondUser: User) => {
            const fieldInFirstUser = firstUser.firstName ;
            const fieldInSecondUser = secondUser.firstName;

            const order = alphabetOrder === 1 ? -1 : 1;
            setAlphabetOrder(order);

            let sortResult = 0;
            if (fieldInFirstUser> fieldInSecondUser){
                sortResult = 1;
            }
            if (fieldInFirstUser < fieldInSecondUser){
                sortResult = -1;
            }

            return sortResult * order;

        });
        setUsersSorted([...result]);

        };
        //Le hook Use effect
        /***const getUsersWithoutAsyncAwait = () =>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsersSorted(users));
        };*/

        const getUsersWithAsyncAwait = async() =>{
           const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const users = await response.json();
            setUsersSorted(users);
            };

        useEffect(() => {
            getUsersWithAsyncAwait();
        }, []);
    
    return (
        <section >
            <div className="flex justify-end items-center text-my-2 gap-2">
                <span>Trier par</span>
                <button type="button"
                 className="border border-gray-500 rounded-md py-2 px-1 text-xs bg-green-500"
                    onClick={()=> sortBy("gender", "male")}
                >
                    Hommes
                    
                </button>
                <button type="button"
                 className="border border-gray-50 rounded-md py-2 px-1 text-xs bg-blue-700"
                     onClick={()=> sortBy("gender", "female")}
                 >
                    Femmes
                </button>
                <button type="button"
                 className="border border-gray-50 rounded-md py-2 px-1 text-xs bg-amber-400"
                     onClick={()=> sortAlphabetically()}
                 >
                    DE A - Z / Z - A
                </button>
               
            </div>

              <div className=" ">
            {usersSorted.map(({id, gender, firstName, lastName, phone, email = "Indisponible"} : User, index: number) =>(
                <Link to ={`/me/users/${id}`}
                 className=" rounded-lg user border border-gray-100 md:grid grid-cols-3 gap-4 " key={id || index}>
                    <h3 className="text-lg  border border-gray-500">
                        <p>{gender} {firstName} {lastName}</p>
                    </h3>
                    <p className="text-base ">{email}</p>
                    <p className="text-base ">{phone}</p>
                </Link>
            ))}
            </div>

          
        </section>
    );
};



export default Users;
