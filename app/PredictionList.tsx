'use client'
import { GenePrediction } from "./data";

const PredictionList = ( {predictions}: {predictions: GenePrediction[]}) => {
    return(
    <>
    {predictions.map((p) => (
      <div key={p.gene}>
        <div>{p.gene}</div>
        <div>{p.confidence}</div>
        <div>{p.modality}</div>
      </div>
      ))}
    </>
    )}

export default PredictionList;