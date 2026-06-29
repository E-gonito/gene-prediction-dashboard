import { predictions } from "./data";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <h1 className="text-4xl font-bold p-8 ">Gene Prediction</h1>
    <div>
      {predictions.map((p) => (
      <div key={p.gene}>
        <div>{p.gene}</div>
        <div>{p.confidence}</div>
        <div>{p.modality}</div>
      </div>
      ))}
    </div>
    </div>
  );
}
