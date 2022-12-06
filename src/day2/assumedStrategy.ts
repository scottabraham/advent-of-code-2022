import {
  encodedRpsChoice,
  outcomeScore,
  possibleOutcomes,
  rockPaperScissorsResult,
  rpsChoice,
  rpsChoiceScore,
  rpsStrategyCalculator,
} from "./types";

class AssumedStrategy implements rpsStrategyCalculator {
  opponent: rpsChoice;
  you: rpsChoice;
  constructor(opponent: encodedRpsChoice, you: encodedRpsChoice) {
    this.opponent = this.decodeRpsChoice(opponent);
    this.you = this.decodeRpsChoice(you);
  }

  playHand(): rockPaperScissorsResult {
    /* todo: this needs some re-factoring */

    const gameOutcomeByOpponentHand = possibleOutcomes.get(this.opponent);

    const res = gameOutcomeByOpponentHand?.findIndex(
      (choice) => choice === this.you
    );

    if (res === 0) {
      return {
        points: outcomeScore.get("win")! + rpsChoiceScore.get(this.you)!,
        opponent: this.opponent,
        you: this.you,
      };
    } else if (res === 1) {
      return {
        points: outcomeScore.get("lose")! + rpsChoiceScore.get(this.you)!,
        opponent: this.opponent,
        you: this.you,
      };
    } else {
      return {
        points: outcomeScore.get("draw")! + rpsChoiceScore.get(this.you)!,
        opponent: this.opponent,
        you: this.you,
      };
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
      case "X":
        return "rock";
      case "Y":
        return "paper";
      case "Z":
        return "scissors";
      default:
        return "rock";
    }
  }
}

export default AssumedStrategy;
