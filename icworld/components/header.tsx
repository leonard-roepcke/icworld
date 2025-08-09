type HeaderProps = {
    title?: string;
};

export default function Header({ title = "Header give a title"}: HeaderProps) {
    return (
        <div className="">
            <div className="text-center text-[clamp(1rem,5vw,5rem)] font-bold m-10 font-mono mx-auto w-[80%] max-w-[300px] whitespace-nowrap">
                {title}
            </div>
        </div>
        
    )
}