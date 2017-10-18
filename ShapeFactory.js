class ShapeFactory{

    constructor(){
        this.elements = [];
        this.lastY = 0;
    }

    generate(time, max = 50 ){
        var interval = setInterval(() => { // fonction flechée
            this.lastY += 12;
            var color = new Color();
            color.random();
            
            var element = null;
            if(Math.round( Math.random())){
                element = new Square(0, this.lastY, color, 10);
                this.elements.push(element);
            }
            else{
                element = new Circle(5, this.lastY, color, 5);
                this.elements.push( element);
                
                if( this.elements.lenght >= max){
                    clearInterval( interval );
                }
            }


        }, time);
        
    }
}
/*function (test ){
    return this.truc;

}
(test)*/