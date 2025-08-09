import Image from "next/image";
import Header from "@/components/header";
import InputField from "@/components/inputfild";
import ResponsiveText from "@/components/responsiveText";

export default function Home() {
	return(
		<div>

			<Header title="IC World"/>
			<ResponsiveText title="Responsive Text Example"/>
			<InputField placeholder="Search for an IC Nr."/>

			<div className="flex mx-auto w-full">
				<div className="flex-1">
					<ResponsiveText title="Left Text" />
					<ResponsiveText title="Left Text" />
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
