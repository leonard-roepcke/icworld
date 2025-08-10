"use client";
import { useEffect, useState } from "react";
import IcCard from "@/components/ic-card";
import InputField from "@/components/inputfild";
import ResponsiveText from "@/components/responsiveText";
import { getAllIcs } from "@/lib/db/ics";

export default function Home() {
  const [ics, setIcs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  function handleSearch(value: string) {
    setFilter(value.toLowerCase()); 
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getAllIcs();
      setIcs(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-5"></div>
      <ResponsiveText text="IC World" />
      <div className="p-5"></div>
      <InputField placeholder="Search for an IC Nr." onEnter={handleSearch} />
      <div className="p-5"></div>

      {ics
        .filter((ic) => ic.nr.toLowerCase().includes(filter))
        .map((ic) => (
          <div key={ic.nr} className="p-5">
            <IcCard nr={ic.nr} />
          </div>
        ))}
    </div>
  );
}
