type HeaderProps = {
    title?: string;
};

export default function Header({ title = "Header give a title"}: HeaderProps) {
    return (
        <div className="text-center text-5xl font-bold m-10 font-mono mx-auto">
            {title}
        </div>
    )
}