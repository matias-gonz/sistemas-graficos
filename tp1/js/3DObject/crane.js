class Crane extends Objeto3D {
    constructor(n,m,height,thickness,lenght){
        super(n,m);
        this.height = height;
        this.thickness = thickness;
        this.lenght = lenght;
        this.bases = [];
    }
    setupBuffers(){
        console.log(this.thickness,this.height);
        this.bases.push(new Cuboid(this.rows,this.cols,this.thickness,this.thickness,this.height));
        this.bases.push(new Cuboid(this.rows,this.cols,this.thickness*7/8,this.thickness*7/8,this.height));
        this.bases.push(new Cylinder(this.rows,this.cols,this.height,this.thickness*3/8));
        this.bases[0].setupBuffers();
        this.bases[1].setupBuffers();
        this.bases[2].setupBuffers();
    }
    draw(mFather){
        var m = mat4.create();
        mat4.multiply(m,mFather,this.modMat);

        var m1 = m;
        mat4.translate(m1,m1,[0,-this.height-1,0]);
        this.bases[0].draw(m1);
        mat4.translate(m1,m1,[0,this.height,0]);
        this.bases[1].draw(m1);
        mat4.translate(m1,m1,[0,this.height*3/8,0]);
        this.bases[2].draw(m1);
        
    }

}