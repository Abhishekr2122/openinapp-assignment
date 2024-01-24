export default function ButtonIcon({ icon, text }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",

        alignItems: "center",
      }}
    >
      <div>{icon}</div>
      <p>{text}</p>
    </div>
  );
}
