import Image from "next/image";
import Header from "@/components/header";
import InputField from "@/components/inputfild";

export default function Home() {
	return(
		<div>

			<Header title="IC World"/>
			<InputField placeholder="Search for an IC Nr."/>

		</div>
	)
}
