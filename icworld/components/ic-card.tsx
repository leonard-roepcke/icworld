import { useEffect, useState } from "react";
import ResponsiveText from "./responsiveText";
import { getIcNameByNr } from "@/lib/db/ics"; 
type Props = {
  nr: string;
};

export default function IcCard({ nr }: Props) {
    const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const result = await getIcNameByNr(nr);
      setName(result);
    })();
  }, [nr]);
  
  return (
    <div className="p-5 flex-1 justify-center">
      <ResponsiveText text={name} />
      <ResponsiveText text={nr} />
    </div>
  );
}