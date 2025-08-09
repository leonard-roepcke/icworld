"use client";
import { useEffect, useState } from "react";
import IcCard from "@/components/ic-card";
import InputField from "@/components/inputfild";
import ResponsiveText from "@/components/responsiveText";
import { getAllIcs } from "@/lib/db/ics";

export default function Home() {
	const [ics, setIcs] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	function handleSearch(value: string) {
		console.log("Search for:", value);
		console.log("All ICs:", ics);
	}

	useEffect(() => {
		async function fetchData() {
		const data = await getAllIcs();
		setIcs(data);
		setLoading(false);
		}
		fetchData();
	}, []);

	if (loading) return <p>Lade ICs...</p>;
	return(
		<div>
			<div className="p-5"></div>
			<ResponsiveText text="IC World"/>
			<div className="p-5"></div>
			<InputField placeholder="Search for an IC Nr." onEnter={handleSearch}/>

			<div className="p-5"></div>

			

			{ics.map((ic) => (
				<div className="p-5">
					<IcCard key={ic.nr} nr={ic.nr} />
				</div>
        		
      		))}

		</div>
	)
}