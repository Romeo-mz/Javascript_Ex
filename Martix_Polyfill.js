function SquareMatrix(matrix){

    if(typeof matrix === 'number'){
        length = matrix.length;
        matrix = [];
        for(var i; i < length; i++){
            matrix.push([]);
            for(var j; j < length; j++){
                matrix.push(0);
            }
        }
    }

    this.matrix = matrix;
    this.length = matrix.length;
}

SquareMatrix.prototype.add = function(matrix){
   // Initializations
   var matrixArray = this.array;
   var secondMatrixArray = matrix.array;
   var n = this.n;

   // Create a new matrix to represent the sum
   var sumMatrix = new SquareMatrix(n);
   var sumMatrixArray = sumMatrix.array;

   for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
         sumMatrixArray[i][j] = matrixArray[i][j] + secondMatrixArray[i][j];
      }
   }

   return sumMatrix;
}

SquareMatrix.prototype.multiply = function(matrix){
    var matrixArray = this.array;
    var secondMatrixArray = matrix.array;
    var n = this.n;
 
    // Create a new matrix to represent the product
    var productMatrix = new SquareMatrix(n);
    var productMatrixArray = productMatrix.array;
 
    var sum;
 
    for (var i = 0; i < n; i++) {
       for (var j = 0; j < n; j++) {
          sum = 0;
          for (var k = 0; k < n; k++) {
             sum += matrixArray[i][k] * secondMatrixArray[k][j];
          }
          productMatrixArray[i][j] = sum;
       }
    }
 
    return productMatrix;
}

SquareMatrix.prototype.copy = function(matrix){
    var matrixArray = this.array;
    var matrixCopy = [];

    for(var i = 0; i < matrixArray.length; i++){
        for(var j = 0; j < matrixArray[0].length; j++){
            matrixCopy[i][j] = matrixArray[i][j];
        }
    }
    return matrixCopy;
}

SquareMatrix.prototype.fill = function(value){
    var matrixArray = this.array;

    for(var i = 0; i < matrixArray.length; i++){
        for(var j = 0; j < matrixArray[0].length; j++){
            matrixArray[i][j] = value;
        }
    }
}

//Polyfill
function objectCreatePolyfill(proto) {
    function F() {}
    F.prototype = proto;
 
    return new F();
 }
 
 var a = { x: 10, y: 20 };
 var b = objectCreatePolyfill(a);
 b.x = 500;
 
 console.log(b.x, b.y);