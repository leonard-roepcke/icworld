"use client";
import InputField from "@/components/inputfild";
import ResponsiveText from "@/components/responsiveText";

export default function Home() {
	function handleSearch(value: string) {
		console.log("Search for:", value);		
	}

	return(
		<div>
			<div className="p-5"></div>
			<ResponsiveText title="IC World"/>
			<div className="p-5"></div>
			<InputField placeholder="Search for an IC Nr." onEnter={handleSearch}/>

			<div className="p-5"></div>

		</div>
	)
}