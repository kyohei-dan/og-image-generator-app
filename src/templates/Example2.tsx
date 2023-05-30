import background from "/example-2-background.png";

export function Example2({ role, name, logo }: { role?: string; name?: string; logo?: string }) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "80px 96px",
        width: "100%",
      }}
    >
      <div style={{ fontSize: 40 }}>{logo}</div>
      <div style={{ fontSize: 40, marginTop: 280 }}>{role}</div>
      <div style={{ fontSize: 80, marginTop: 20 }}>{name}</div>
    </div>
  );
}
