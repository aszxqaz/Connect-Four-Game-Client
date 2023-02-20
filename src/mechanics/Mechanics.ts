export class Mechanics {
  private static outerOffsetXPercent = 0.0269;
  private static innerOffsetXPercent = 0.0285;
  private static outerOffsetTopPercent = 0.0286;
  private static outerOffsetBottomPercent = 0.1128;
  private static innerOffsetYPercent = 0.0303;
  private static cellsCountX = 7;
  private static cellsCountY = 6;

  private cellWidth!: number;
  private cellHeight!: number;
  private outerOffsetX!: number;
  private innerOffsetX!: number;
  private outerOffsetTop!: number;
  private outerOffsetBottom!: number;
  private innerOffsetY!: number;
  private boardWidth!: number;
  private boardHeight!: number;

  constructor(boardWidth: number, boardHeight: number) {
    this.calculate(boardWidth, boardHeight);
  }

  getCounterSize() {
    return `${this.boardWidth * 0.1013}px`;
  }

  calculate(boardWidth: number, boardHeight: number) {
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;

    this.innerOffsetX = Mechanics.innerOffsetXPercent * boardWidth;
    this.outerOffsetX = Mechanics.outerOffsetXPercent * boardWidth;

    this.innerOffsetY = Mechanics.innerOffsetYPercent * boardHeight;
    this.outerOffsetTop = Mechanics.outerOffsetTopPercent * boardHeight;
    this.outerOffsetBottom = Mechanics.outerOffsetBottomPercent * boardHeight;

    const availableSpaceX =
      boardWidth -
      this.outerOffsetX * 2 -
      this.innerOffsetX * (Mechanics.cellsCountX - 1);

    this.cellWidth = availableSpaceX / Mechanics.cellsCountX;

    const availableSpaceY =
      boardHeight -
      this.outerOffsetTop -
      this.outerOffsetBottom -
      this.innerOffsetY * (Mechanics.cellsCountY - 1);

    this.cellHeight = availableSpaceY / Mechanics.cellsCountY;
  }

  getXPos(x: number) {
    const abs =
      this.outerOffsetX +
      this.innerOffsetX * (x) +
      (this.cellWidth * (2 * x + 1)) / 2;

    return `${(abs / this.boardWidth) * 100}%`;
  }

  getYPos(y: number) {
    const abs =
      this.outerOffsetTop +
      this.innerOffsetY * (y) +
      (this.cellHeight * (2 * y + 1)) / 2;

    return `${(abs / this.boardHeight) * 100}%`;
  }
}
