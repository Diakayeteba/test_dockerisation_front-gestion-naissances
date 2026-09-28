import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section>
        <header>
            
        <Link className="text-2xl  text-blue px-5 py-2 block" 
        to={"/"}>LES NOUVELLES VIES
        </Link>

        </header>
        <main>
            <Outlet/>
        </main>
    </section>
  );
}

export default Dashboard