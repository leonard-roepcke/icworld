import Image from "next/image";
import InputField from "@/components/inputfild";
import ResponsiveText from "@/components/responsiveText";

export default function Home() {
	return(
		<div>
			<ResponsiveText title="IC World"/>
			<InputField placeholder="Search for an IC Nr."/>

			<div className="flex">
				<div className="flex-1">
					<ResponsiveText title="Left Text" />
					<div className="p-5"></div>
					<ResponsiveText title="Left Text" />
					<div className="p-5"></div>
					<div className="flex">
						<ResponsiveText title="Left Text" />
						<ResponsiveText title="Left Text" />
						<ResponsiveText title="Left Text" />
					</div>
				</div>
				<ResponsiveText title="midle Text" />
				<ResponsiveText title="Right Text" />
				
			</div>

		</div>
	)
}
