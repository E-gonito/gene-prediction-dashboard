export interface GenePrediction {
  gene: string;
  confidence: number;
  modality: "FAF"|"IR"|"SD-OCT"; 
}
 
export const predictions: GenePrediction[] = [
    {gene: "ABCA4", confidence: 0.92, modality: "SD-OCT"},
    {gene: "RPGR", confidence: 0.9, modality: "FAF"},
    {gene: "USH2A", confidence: 0.83, modality: "SD-OCT"},
    {gene: "RPE65", confidence: 0.8, modality: "IR"},
    {gene: "CRB1", confidence: 0.76, modality: "IR"},
    {gene: "CEP290", confidence: 0.7, modality: "FAF"}
];