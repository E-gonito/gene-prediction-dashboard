import PredictionList from "./PredictionList";
import { predictions } from "./data";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <h1 className="text-4xl font-bold p-8 ">Gene Prediction</h1>
    <div>
      <PredictionList predictions={predictions}></PredictionList>
    </div>
    </div>
  );
}
