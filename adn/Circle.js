class Circle extends Shape {

    constructor( x, y, color,r){
        // this.x=x;
        // this.y=y;
        //this.point = new Point();
        
        super(x, y, color); //Le mot-clé super est utilisé pour appeler des fonctions définies sur l'objet parent.
        this.radius=r;
        this.sAngle=0;
        this.eAngle = 2 * Math.PI;
    }

draw( ctx ){

    ctx.beginPath(); //start drawing
    
    ctx.arc(this.point.x, this.point.y, this.radius, this.sAngle, this.eAngle);
    // ctx.fillStyle = this.color.toString();
    // ctx.fill();
   super.draw( ctx );
}

}