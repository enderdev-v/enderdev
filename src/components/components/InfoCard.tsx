export default function InfoCard({ children }: { children: React.ReactNode}) {
    return (
        <div className="dark:bg-black-Card bg-white-Card dark:text-whiteText block max-w-sm p-6 border border-default border-gray-600 rounded-4xl shadow-xs ">
            <p className="dark:text-whiteText text-blackText font-mono">{children}</p>
        </div>
    );
};
