class Rectangle extends Objeto3D {
    constructor(n,m,lenght,width){
        super(n,m);
        this.lenght = lenght;
        this.width = width;
    }

    setupBuffers(){

        var pos= [
            0, 0, 0,
            0, -this.lenght, 0,
            this.width, 0, 0,
            this.width, -this.lenght,0];
        
          var normal= [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,];

        this.trianglesVerticeBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.trianglesVerticeBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos), gl.STATIC_DRAW);    


        this.trianglesNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.trianglesNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normal), gl.STATIC_DRAW);
        var index=[0,1,2,1,2,3];
        

        this.trianglesIndexBuffer = gl.createBuffer();
        this.trianglesIndexBuffer.number_vertex_point = index.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.trianglesIndexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(index), gl.STATIC_DRAW);
    }
}