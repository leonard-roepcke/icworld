type Props = {
    placeholder: string;
};

export default function InputField({ placeholder = "Input placeholder" }: Props) {
    return (
        <div className="w-[80%] max-w-[300px] mx-auto">
            <input type="text" className="border border-gray-300 rounded-full p-2 pl-4 w-full" placeholder={placeholder}
            ></input>
        </div>
    );
}