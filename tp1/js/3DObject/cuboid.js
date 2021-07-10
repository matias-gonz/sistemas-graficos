class Cuboid extends Objeto3D {
    constructor(n,m,lenght,width,height){
        super(n,m);
        this.lenght = lenght;
        this.width = width;
        this.height = height;

        this.rectangles = [];

    }

    setupBuffers(){
        this.initRectangles();
    }

    initRectangles(){
        this.rectangles.push(new Rectangle(0,0,this.height,this.width));
        this.rectangles.push(new Rectangle(0,0,this.height,this.lenght));
        this.rectangles[0].setupBuffers();
        this.rectangles[1].setupBuffers();
        
    }

    draw(mFather){
        var m = mat4.create();
        mat4.multiply(m,mFather,this.modMat);

        var m1 = m;
        mat4.translate(m1,m1,[-this.width/2,this.height/2,this.lenght/2]);
        this.rectangles[0].draw(m1);
        mat4.translate(m1,m1,[0,0,-this.lenght]);
        this.rectangles[0].draw(m1);

        var m2 = m;
        mat4.rotate(m2,m2,-Math.PI/2,[0,1,0]);
        this.rectangles[1].draw(m2);
        mat4.translate(m1,m1,[0,0,-this.width]);
        this.rectangles[1].draw(m2);

    }

}