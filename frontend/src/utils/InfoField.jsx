export default function InfoField({ label, value }) {
  return (
    <p>
      <span className="text-sm">{label}:</span>
      <span className="text-lg"> {value || "No data"}</span>
    </p>
  );
}
