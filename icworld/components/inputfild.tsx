"use client";
type Props = {
    placeholder: string;
    onEnter?: (value: string) => void;
};

export default function InputField({ placeholder = "Input placeholder", onEnter }: Props) {
    return (
        <div className="w-[80%] max-w-[300px] mx-auto ">
            <input
                type="text"
                className="border border-gray-300 rounded-full p-2 pl-4 w-full"
                placeholder={placeholder}
                onKeyUp={(event) => {
                    console.log(event.currentTarget.value);
                }}
            />
        </div>
    );
}
