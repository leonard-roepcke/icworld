import { use } from "react";
import ResponsiveText from "@/components/responsiveText";
import { getIcNameByNr } from "@/lib/db/ics";

type Props = {
  params: { nr: string };
};

export default async function IcPage({ params }: Props) {
  const name = await getIcNameByNr(params.nr);

  return (
    <div>
        <div className="p-5"></div>
        <ResponsiveText text={`${name} | ${params.nr}`} />
        <div className="p-5"></div>
      
    </div>
  );
}
