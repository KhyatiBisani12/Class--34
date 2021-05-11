class Boggie{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.boggieImage = loadImage("images/coach.png")
      this.width = width;
      this.height = height;
      World.add(myWorld,this.body);
    }
    show()
    {
        imageMode(CENTER);
        // image(imagename,x,y,opt_width,opt_height);
        image(this.boggieImage,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  