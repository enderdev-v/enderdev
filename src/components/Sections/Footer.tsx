import { WindowLocalStorageNames } from "@/constants/constants";

export default function Footer() {
    return (
        <footer className=" rounded-lg shadow bg-white-200 dark:bg-black-400 mt-4 sm:mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://www.youtube.com/@enderdev-v/" target="_blank" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/enderdev.jpg" className="h-8 w-8 border-3 rounded-full border-solid border-tinted-200" alt="Flowbite Logo" width={32} height={32} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white-0 text-black-0">ender</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <a href="https://bsky.app/profile/enderdev.bsky.social" className="hover:underline me-4 md:me-6 dark:text-white-0 text-black-0">Bluesky</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@enderdev-v/" target="_blank" className="hover:underline me-4 md:me-6 dark:text-white-0 text-black-0">Youtube</a>
                        </li>
                        <li>
                            <button className="hover:underline me-4 md:me-6 dark:text-white-0 text-black-0" onClick={() => window.localStorage.removeItem(WindowLocalStorageNames.Theme)}>Delete Cache</button>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-950 dark:border-gray-100 lg:my-8 " />
                <span className="block text-sm text-gray-500 sm:text-center"><a href="/" target="_blank" className="hover:underline text-blue-950 dark:text-blue-600">enderCopy</a></span>
            </div>
        </footer>
    );
};
