const array=[1,2,3,4,5]; //3을 제거하고싶다
//const delIndex=2;

array.splice(2,1); //삭제 할 인덱스, 1개만 삭제
console.log(array);

//slice
//slice는 원본 배열은 건드리지 않고 수정된 복사 배열을 리턴한다 (교체는 안됨)
//3,4를 출력
var array2=[1,2,3,4,5];
array2.slice(2,4); //시작 인덱스, 마지막 인덱스 -1
var a2=array2.slice(2,4);
console.log(a2);
var a3=array2.slice(1,4);
console.log(a3);

//Arrays.concat(value);
//concat 메서드는 원하는 값을 원본 배열 끝에 추가한 뒤 새로운 배열을 만든다
let con=[1,2,3].concat([4,5],[6,7]);
console.log(con);

//filter
var arr=[1,2,3,4,5]; //2를 제거하고싶다
var delIdx=1; //2의 인덱스는 1이다

arr = arr.filter(function(item, idx) { //filter안에 인자로 함수를 받고, index 값만 필요하니까 명시

    return idx !==delIdx; //배열을 돌면서 인덱스 1이 아닌 나머지만 다시 소집한다

});

console.log(arr);