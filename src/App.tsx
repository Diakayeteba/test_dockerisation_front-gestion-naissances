import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <div className="relative">
  <div className="absolute top-10 left-5 text-2xl unpercase text-white px-5 py-2">Les nouvelles vies</div>
</div>

    <section className="grid grid-rows-0 grid-cols-2 gap-4 mx-autto h-screen ">
      <div className=" bg-blue-800 text-white text-center justify-center items-center flex flex-col">
        <Link className="text-2xl border rounded-md border-white px-5 py-2" 
        to={"/me/users"}>Les utilisateurs
        </Link>
      </div>
      <div className="bg-white-800 text-blue text-center justify-center items-center flex flex-col">
        <Link className="text-2xl border rounded-md border-blue px-5 py-2" 
        to={"/me/demandes"}>Les demande
        </Link>
      </div>
     

         
    </section>
    </>
  );
}
export default App;