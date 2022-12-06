import {
  encodedRpsChoice,
  outcome,
  outcomeScore,
  possibleOutcomes,
  rockPaperScissorsResult,
  rpsChoice,
  rpsChoiceScore,
  rpsStrategyCalculator,
} from "./types";

class RealStrategy implements rpsStrategyCalculator {
  opponent: rpsChoice;
  you: outcome;
  constructor(opponent: encodedRpsChoice, you: encodedRpsChoice) {
    this.opponent = this.decodeRpsChoice(opponent);
    this.you = this.decodeRpsResult(you);
  }

  playHand(): rockPaperScissorsResult {
    /* todo: this needs some re-factoring */
    const expectedOutcome = this.you;
    const opponentChoice = this.opponent;

    const gameOutcomeByOpponentHand = possibleOutcomes.get(this.opponent);

    if (expectedOutcome === "win") {
      const winningHand = gameOutcomeByOpponentHand![0];
      return {
        points: outcomeScore.get("win")! + rpsChoiceScore.get(winningHand)!,
        opponent: opponentChoice,
        you: winningHand,
      };
    } else if (expectedOutcome === "lose") {
      const losingHand = gameOutcomeByOpponentHand![1];
      return {
        points: outcomeScore.get("lose")! + rpsChoiceScore.get(losingHand)!,
        opponent: opponentChoice,
        you: losingHand,
      };
    } else {
      return {
        points: outcomeScore.get("draw")! + rpsChoiceScore.get(opponentChoice)!,
        opponent: opponentChoice,
        you: opponentChoice,
      };
    }
  }

  decodeRpsResult(encodedChoice: encodedRpsChoice): outcome {
    switch (encodedChoice) {
      case "X":
        return "lose";
      case "Y":
        return "draw";
      default:
        return "win";
    }
  }

  decodeRpsChoice(encodedChoice: encodedRpsChoice): rpsChoice {
    switch (encodedChoice) {
      case "A":
        return "rock";
      case "B":
        return "paper";
      case "C":
        return "scissors";
      default:
        return "rock";
    }
  }
}

export default RealStrategy;
