import { SVG_NS } from '../settings';
import Board from './Board';

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.svg = document.createElementNS(SVG_NS, 'svg');
    this.gameElement = document.getElementById(this.element);
    this.svg.setAttributeNS(null, "width", this.width);
    this.svg.setAttributeNS(null, "height", this.height);
    this.svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(this.svg);
    this.board = new Board(this.width, this.height);

		// Other code goes here...
  }

  render() {
    // More code goes here....
    
    this.board.render(this.svg);
  }
}
