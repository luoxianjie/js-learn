

function sort(x,y){
    if(x > y){
        return 1;
    }

    if(x < y){
        return -1;
    }

    return 0;
}

var arr = [1,6,5,3,2,3,5,4];

console.log(arr.sort(sort));

