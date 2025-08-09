import Navbar from "../components/Sections/navbar"



export default function Page404() {
    return (
        <>
            <Navbar></Navbar>
            <div className="m-10 text-black-0 dark:text-white-0">
                <div className="flex items-center space-x-2 px-3 py-1 rounded-full w-fit ">
                <h1 className="font-extrabold text-7xl mr-10">Page not found</h1>
                <img className="rounded-lg" src="https://cdn.discordapp.com/emojis/1324117835756081235.webp?size=96&animated=true" alt="Ryo Laugh" height={128} width={128}/>
                </div>
                <br />
                <p className="text-5xl">Oh, The Page that you looking doesn't exist Sorry!!</p>
                <br />
                <p className="text-3xl">Could you back to <a href="/" className="text-sky-600 font-bold">home page</a> pls</p>
                <br />
                <p className="text-xl">Or you can try to find secret location meanwhile ryo laughs</p>
            </div>
        </>
    );
};
