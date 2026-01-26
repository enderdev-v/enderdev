import { WindowLocalStorageNames } from "@src/constants/constants";

export default function Footer() {
    return (
        <footer className="rounded-t-4xl shadow dark:bg-footerBlack/50 bg-footerWhite/90  transition-colors duration-750 ease-in-out">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <button  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse cursor-text">
                        <img src="/enderdev.jpg" className="h-8 w-8 border-3 rounded-full border-solid border-tinted-200" alt="Flowbite Logo" width={32} height={32} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-whiteText text-blackText">enderdev</span>
                    </button>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <a href="https://bsky.app/profile/enderdev.bsky.social" className="hover:underline me-4 md:me-6 dark:text-whiteText text-blackText">Bluesky</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@enderdev-v/" target="_blank" className="hover:underline me-4 md:me-6 dark:text-whiteText text-blackText">Youtube</a>
                        </li>
                        <li>
                            <button className="hover:underline me-4 md:me-6 dark:text-whiteText text-blackText" onClick={() => window.localStorage.removeItem(WindowLocalStorageNames.Theme)}>Delete Cache</button>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 dark:border-enderWhite border-enderBlack" />
                <span className="block text-lg  text-gray-500 sm:text-center"><a href="/" target="_blank" className="hover:underline text-blue-600">&copy; enderdev-v</a></span>
            </div>
        </footer>
    );
};