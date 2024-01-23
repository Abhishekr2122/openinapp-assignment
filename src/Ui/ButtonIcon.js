export default function ButtonIcon({ icon, text }) {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>{icon}</div>
      <p>{text}</p>
    </div>
  );
}
