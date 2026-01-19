import '@src/css/index.css'
import { NavLink as NvLink } from 'react-router'

type NavLinkProps = {
    to: string,
    children: React.ReactNode
}

export default function NavLink({ to, children }: NavLinkProps) {
    return (
        <li>
            <NvLink to={to} className="block py-2 px-3 text-whiteText rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white-200 md:p-0 md:dark:hover:text-white-200 dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent">
                {children}
            </NvLink>
        </li>
    )
}