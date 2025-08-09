import '@/index.css'
import { Link as RouterLink } from 'react-router-dom';

type NavLinkProps = {
    to: string,
    children: React.ReactNode
}

export default function NavLink({ to, children }: NavLinkProps) {
    return (
        <li>
            <RouterLink to={to} className="block py-2 px-3 text-white-0 0 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white-200 md:p-0 md:dark:hover:text-white-200 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent">
                {children}
            </RouterLink>
        </li>
    )
}