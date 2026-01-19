import { ButtonType } from "#components/UI/Components";

export default function Button({ variant = 'outline-info', children, ...props}: ButtonType) {
    return(
        <a className={`button ${variant} transition-colors duration-750 ease-in-out`} {...props}>{children}</a>
    )
}