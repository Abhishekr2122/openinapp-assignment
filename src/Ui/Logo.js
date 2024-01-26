export default function Logo({ source }) {
  return (
    <img
      src={source}
      alt="no data found"
      style={{
        height: "42px",
        width: "42px",
        top: "50px",
        left: "56px",
        position: "absolute",
      }}
    />
  );
}
