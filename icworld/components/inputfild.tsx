type Props = {
    placeholder: string;
};

export default function InputField({ placeholder = "Input placeholder" }: Props) {
    return (
        <div>
            <input type="text" className="border border-gray-300 rounded-full p-2 pl-4 w-full" placeholder={placeholder}
            ></input>
        </div>
    );
}