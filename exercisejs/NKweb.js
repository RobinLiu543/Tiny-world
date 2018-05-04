/*function sum(arr){
  var totall = 0;
arr.forEach(function(e){totall += e;});
return totall;
}

var ar=[1,2,3,4];
var x = sum(ar);
document.getElementById("out").value=x;*/

function search(arr){
  var i,j,arr1=[];
  for(i=0; i<arr.length-1;i++){
    j=i+1;
    for(j;j<arr.length;j++){
      if (arr[i]==arr[j]){
        arr1.push(arr[i]);
      }
    }
  }
  return arr1;
}
var arr= [1,2,4,4,5,3,3,6,4];
document.getElementById("out").value=search(arr);
