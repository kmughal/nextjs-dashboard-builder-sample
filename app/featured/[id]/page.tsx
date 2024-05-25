export default function FeaturePage({ params }: { params: { id: number } }) {
  return (
    <div>
      <h1>Feature Page = {params.id}</h1>
    </div>
  );
}
