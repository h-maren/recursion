function fibs(n){
    let result=[];
    for (let i=0; i<n; i++){
        if(i===0){
            result.push(0);
        }
        if(i===1){
            result.push(1);
        }
        if(i>1){
            let value=result[i-2]+r*esult[i-1];
            result.push(value);
        }
    }
    return result;
}

function fibsRec(n){
    if(n == 0){
        return [0];
    }
    if(n == 1) {
        return [0,1];
    }
    let array=fibsRec(n-1);
    console.log(array);
    console.log(array[n-1]);
    console.log(array[n-2]);
    return [...array,array[n-1]+array[n-2]];
}

function mergeSort(array){
    let arraySize=array.length;
    //console.log(arraySize);
    if(arraySize===1){
        return array;
    }
    let mid=Math.floor(arraySize/2);
    //console.log(mid);
    let leftArray=mergeSort(array.slice(0,mid));
    let rightArray=mergeSort(array.slice(mid));
    //console.log(leftArray);
    //console.log(rightArray);
    //console.log(leftArray[0]);
    //console.log(rightArray[0]);
    return merge(mergeSort(leftArray),mergeSort(rightArray));
}

function merge(left,right){
    let result=[];
    console.log(left);
    console.log(right);
    while(left.length&&right.length){
        if(left[0]<right[0]){
            console.log(`merged left value of ${left[0]}`);
            result.push(left.shift());
        } else {
            console.log(`merged right value of ${right[0]}`);
            result.push(right.shift());
        }
    }
    console.log(left);
    console.log(right);
    console.log(result);
    console.log("merged!");
    return [...result,...left,...right];
}

let testOne=[3,2,1,13,8,5];
let result=mergeSort(testOne);
console.log(result);