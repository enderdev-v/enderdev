import "@css/index.css"

type BarType = {
    per: string | number | undefined
    title: string;
    variant: "Dark" | "Blue" | "Red" | "Green" | "Yellow" | "Indigo" | "Purple"
}

export default function Bar({ per, variant, title }: BarType) {

    return (
        <div>
            <h4 className={`mb-1 text-base font-medium dark:text-whiteText text-blackText transition-colors duration-750 ease-in-out`}>{title}&nbsp;&nbsp;&nbsp;<span className="font-bold text-indigo-500">{per}</span></h4>
            <div className="w-full bg-gray-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className={"x h-2.5 rounded-full " + variant} style={{ width: per }}></div>
            </div>
        </div>
    );
};