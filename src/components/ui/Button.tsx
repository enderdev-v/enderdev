import { ButtonType } from "@components/UI/Components";

export default function Button({ variant = 'outline-info', children, ...props}: ButtonType) {
    return(
        <a className={`button ${variant}`} {...props}>{children}</a>
    )
}