import { IAdviceSlip } from "./IAdviceSlip";

export interface IAdviceSlipResult {
  total_results: string;
  query: string;
  slips: IAdviceSlip[];
}