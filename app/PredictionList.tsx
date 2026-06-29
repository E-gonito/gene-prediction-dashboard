'use client'
import { useState } from "react";
import { GenePrediction } from "./data";

const PredictionList = ( {predictions}: {predictions: GenePrediction[]}) => {
    const [sortByConfidence, setSortByConfidence] = useState(true);
    const rows = sortByConfidence
    ? [...predictions].sort((a, b) => b.confidence - a.confidence)
    : predictions;
return (
  <div className="p-8">
    <button
      onClick={() => setSortByConfidence(bool => !bool)}
      className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Sort by Confidence
    </button>

    <div className="grid grid-cols-3 gap-4 font-semibold border-b pb-2 mb-2">
      <div>Gene</div>
      <div>Confidence</div>
      <div>Modality</div>
    </div>

    {rows.map((p) => (
      <div key={p.gene} className="grid grid-cols-3 gap-4 py-2 border-b">
        <div>{p.gene}</div>
        <div>{p.confidence}</div>
        <div>{p.modality}</div>
      </div>
    ))}
  </div>
);}

export default PredictionList;