import { SVG_NS } from '../settings';
import audioFile from '../../public/sounds/pong-01.wav'; 

export default class Ball {
    constructor(boardWidth, boardHeight, radius) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.radius = radius;
        this.direction = 1;
        this.ping = new Audio(audioFile);
        this.color = "white";
        this.reset();
    }
    reset() {
        this.x = this.boardWidth/2;
        this.y = this.boardHeight/2;
        this.vx = 0;   
        this.vy = 0;
        while (this.vy === 0){
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    wallCollision(){
        const hitsTop = this.y - this.radius <= 0;
        const hitsBottom = this.y + this.radius >= this.boardHeight;
        if (hitsTop || hitsBottom) {
            this.vy = this.vy * -1;
        }

        /// if (hitsLeft || hitsRight) {
            /// increase score for the player who scored
            /// this.direction = this.direction * -1
            // this.reset();
        //}

    }

     goalCollision(player1, player2) {
         if (this.x <= 0){
             player2.increaseScore();
             this.direction = this.direction * -1;
             if (player2.getScore() >= 2) {
                 this.color = 'red';}
             if (player2.getScore() >= 4) {
                    this.color = 'green';}   
             this.reset();
         }else if (this.x >= this.boardWidth) {
             player1.increaseScore();
             this.direction = this.direction * -1;
             if (player2.getScore() >= 2) {
                this.color = 'red';}
             if (player2.getScore() >= 4) {
                    this.color = 'green';}  
             this.reset();
         }
         }
    

    paddleCollision(player1, player2){

          if (this.vx > 0){
                const p2  = player2.getCoordinates();
                if (this.x + this.radius >= p2.left &&
                    this.y  >= p2.top &&
                    this.y  <= p2.bottom) {
                    this.vx = this.vx * -1;
                    this.ping.play();
                    }
        
          } else {
              const p1 = player1.getCoordinates();
          if (this.x - this.radius <= p1.right &&
              this.y >= p1.top &&
              this.y <= p1.bottom) {
                  this.vx = this.vx * -1;
                  this.ping.play();
              }
       
            }
        }

    render(svg, player1, player2) {
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, "fill", this.color);
        circle.setAttributeNS(null, "cx", this.x);
        circle.setAttributeNS(null, "cy", this.y);
        circle.setAttributeNS(null, "r", this.radius);
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.wallCollision();
        this.goalCollision(player1, player2)
        this.paddleCollision(player1, player2)
        svg.appendChild(circle);



    }
}