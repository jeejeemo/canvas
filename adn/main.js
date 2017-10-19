var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var factory = new ShapeFactory();
factory.generate( 500 );

// var color = new Color();
// color.random();


/*(vers1)ou var color = new Color().ramdom();*/
    // var circle = new Circle(100, 100, color, 50);
    // circle.draw (ctx );

    //var  square = new Square( 100, 200, color, 50 );


/*Systeme d'animation natif de javascript*/

function animate(){

    ctx.clearRect( 0, 0, 2400, 1500);// effacer un rectangle donné


    for ( var element of factory.elements ){
        // element.point.x +=5;

        element.move();
        element.draw (ctx );
        
    }
    requestAnimationFrame(animate);
        
    
        //circle.point.x +=5;
    // circle.point.y +=1;
        //circle.draw( ctx );

        // square.point.x +=5;
        // square.draw( ctx );

    
        // if(circle.point.x < 500){
        //     requestAnimationFrame(animate);
        // }
    
    
}
requestAnimationFrame(animate); // Gere l'animation frame par frame