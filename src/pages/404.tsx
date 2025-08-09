import Navbar from "../components/Sections/navbar"



export default function Page404() {
    return (
        <>
            <Navbar></Navbar>
            <div className="m-10 text-black-0 dark:text-white-0">
                <div className="flex items-center space-x-2 rounded-full w-fit ">
                <h1 className="font-extrabold md:text-7xl text-3xl mr-10">Page not found</h1>
                <img className="rounded-lg border-2 border-solid border-sky-600" src="https://cdn.discordapp.com/emojis/1324117835756081235.webp?size=96&animated=true" alt="Ryo Laugh" height={128} width={128}/>
                </div>
                
                <p className="md:text-5xl text-xl mt-10">Oh, The Page that you looking doesn't exist Sorry!!</p>
                
                <p className="md:text-3xl text-base-2 mt-10">Could you back to <a href="/" className="text-sky-600 font-bold">home page</a> pls</p>
                
                <p className="md:text-xl text-base mt-10">Or you can try to find secret location meanwhile ryo laughs</p>
            </div>
        </>
    );
};
