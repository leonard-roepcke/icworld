export default function AskiArt({ asciiArt }: { asciiArt: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",  
      }}
    >
      <pre
        style={{
          fontFamily: "monospace",
          whiteSpace: "pre",
          backgroundColor: "#111",
          color: "#0f0",
          padding: "1rem",
          borderRadius: "8px",
          overflowX: "auto",
          maxWidth: "90vw",          
          maxHeight: "90vh",        
        }}
      >
        {asciiArt}
      </pre>
    </div>
  );
}
