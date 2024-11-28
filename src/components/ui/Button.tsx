import type { ButtonType } from "./Components";
import '@Styles/components.css'
export default function Button({ variant = 'outline-info', children, ...props}: ButtonType) {
    return(
        <a className={`button ${variant}`} {...props}>{children}</a>
    )
}

