class Shape{
    constructor(x,y,color){

        this.point = new Point(x,y);
        this.color = color;
        this.direction = 0;
    }

    draw( ctx ){
        ctx.fillStyle = this.color.toString();
        ctx.fill();
    }

    moveLeft(){
        this.point.x -=5;
        this.direction = "left";
    }

    moveRight(){
        this.point.x +=5;
        this.direction = "right";
    }

    move(){

        if( this.direction == "right" && this.point.x < 600){
            this.moveRight();
        }
        else if( this.direction == "right"){
            this.moveLeft();
        }
        else if( this.direction == "left" && this.point.x >0){
            this.moveLeft();
        }
        else{
           
                this.moveRight();    
        }
    }
    
}