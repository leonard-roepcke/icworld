"use client";
import { useEffect, useState } from "react";
import ResponsiveText from "./responsiveText";
import { getIcNameByNr } from "@/lib/db/ics"; 
import router, { useRouter } from "next/navigation";
type Props = {
  nr: string;
};

export default function IcCard({ nr }: Props) {
    const [name, setName] = useState("");
    const router = useRouter();

  useEffect(() => {
    (async () => {
      const result = await getIcNameByNr(nr);
      setName(result);
    })();
  }, [nr]);

  const handleClick = () => {
    router.push(`/ic/${nr}`);
  };

  
  
  return (
    <div className="flex justify-center">
      <div className="p-5 px-25 bg-blue-900 rounded-xl hover:bg-blue-800 cursor-pointer" onClick={handleClick}>
          <ResponsiveText text={name} />
          <ResponsiveText text={nr} />
        </div>
    </div>
    
  );
}