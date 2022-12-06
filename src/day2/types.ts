export type encodedRpsChoice = "A" | "B" | "C" | "X" | "Y" | "Z";
export type rpsChoice = "rock" | "paper" | "scissors";
export type outcome = "win" | "lose" | "draw";

export const outcomeScore = new Map<outcome, number>([
  ["win", 6],
  ["lose", 0],
  ["draw", 3],
]);

export const rpsChoiceScore = new Map<rpsChoice, number>([
  ["rock", 1],
  ["paper", 2],
  ["scissors", 3],
]);

export const possibleOutcomes = new Map<rpsChoice, rpsChoice[]>([
  ["rock", ["paper", "scissors"]],
  ["paper", ["scissors", "rock"]],
  ["scissors", ["rock", "paper"]],
]);

export interface rpsStrategyCalculator {
  playHand: () => rockPaperScissorsResult;
}

export interface rockPaperScissorsResult {
  points: number;
  opponent: rpsChoice;
  you: rpsChoice;
}
