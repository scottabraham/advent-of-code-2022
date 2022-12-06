import AssumedStrategy from "./assumedStrategy";
import RealStrategy from "./realStrategy";
import { encodedRpsChoice, rockPaperScissorsResult } from "./types";

export const calculateRockPaperScissorsScore = (
  opponent: encodedRpsChoice,
  you: encodedRpsChoice,
  useRealStrategy?: boolean
): rockPaperScissorsResult => {
  if (!useRealStrategy) {
    const as = new AssumedStrategy(opponent, you);
    return as.playHand();
  } else {
    const as = new RealStrategy(opponent, you);
    return as.playHand();
  }
};
