import ResponsiveText from "@/components/responsiveText";
import { getIcNameByNr, getIcPinoutByNr, getIcVidByNr } from "@/lib/db/ics";
import AskiArt from "@/components/askiArt";
import VideoEmbed from "@/components/videoEmbed";

type PageProps = {
  params: Promise<{ nr: string }>;
};

export default async function IcPage({ params }: PageProps) {
  const { nr } = await params;

  const name = await getIcNameByNr(nr);
  const pinout = await getIcPinoutByNr(nr);
  const vid = await getIcVidByNr(nr);

  return (
    <div>
      <div className="p-5"></div>
      <ResponsiveText text={`${name} | ${nr}`} />
      <div className="p-5"></div>
      <AskiArt asciiArt={pinout} />
      <div className="p-10">
        <VideoEmbed vid={vid} />
      </div>
    </div>
  );
}
