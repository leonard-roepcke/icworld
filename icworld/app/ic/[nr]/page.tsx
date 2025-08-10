import ResponsiveText from "@/components/responsiveText";
import { getIcNameByNr, getIcPinoutByNr, getIcVidByNr } from "@/lib/db/ics";
import AskiArt from "@/components/askiArt";
import VideoEmbed from "@/components/videoEmbed";
type Props = {
  params: { nr: string };
};

export default async function IcPage({ params }: Props) {
  const name = await getIcNameByNr(params.nr);
  const pinout = await getIcPinoutByNr(params.nr);
  const vid = await getIcVidByNr(params.nr);

  return (
    <div>
      <div className="p-5"></div>
      <ResponsiveText text={`${name} | ${params.nr}`} />
      <div className="p-5"></div>
      <AskiArt asciiArt={pinout} />
      <div className="p-10">
        <VideoEmbed vid={vid} />
      </div>
    </div>
  );
}
