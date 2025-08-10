type Props = {
  vid: string; // normaler YouTube-Link, z.B. https://www.youtube.com/watch?v=dQw4w9WgXcQ
};

export default function VideoEmbed({ vid }: Props) {
  // Funktion, um aus normalem YouTube-Link die Video-ID zu extrahieren
  function getVideoId(url: string): string | null {
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname.includes("youtu.be")) {
        // Kurzlink: https://youtu.be/dQw4w9WgXcQ
        return parsedUrl.pathname.slice(1);
      } else if (
        parsedUrl.hostname.includes("youtube.com") ||
        parsedUrl.hostname.includes("www.youtube.com")
      ) {
        // Standardlink: https://www.youtube.com/watch?v=dQw4w9WgXcQ
        return parsedUrl.searchParams.get("v");
      }
      return null;
    } catch {
      return null;
    }
  }

  const videoId = getVideoId(vid);
  if (!videoId) {
    return <p>Ungültiger YouTube-Link</p>;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="rounded-xl"
      style={{
        position: "relative",
        paddingBottom: "56.25%", // 16:9 ratio
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={embedUrl}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
