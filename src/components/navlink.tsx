import '../index.css'
type Navlink ={
    Link: string, 
    children: React.ReactNode
}
export default function Navlink({ Link, children }: Navlink) {
    return (
        <li>
            <a href={Link} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white-200 md:p-0 dark:text-white-0 md:dark:hover:text-white-200 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent">
                {children}
            </a>
        </li>
    )
} 