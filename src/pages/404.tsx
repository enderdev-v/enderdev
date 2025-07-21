import Navbar from "../assets/navbar"



export default function Page404() {
    return (
        <>
            <Navbar></Navbar>
            <div className="m-36 p-4 text-black-0 dark:text-white-0">
                <h1 className=" font-extrabold text-3xl">Page not found</h1>
                <br />
                <p className="text-xl">Sorry, the page you are looking for does not exist.</p>
                <p className="text-xl">You can go back to the <a href="/" className="text-sky-600">home page</a></p>
            </div>
        </>
    );
};
