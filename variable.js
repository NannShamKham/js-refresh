
// let aa = 12;
// const arr = ['aa','bb','cc','dd'];
// arr.push('san');
// console.log(arr);
// if(true){
//     console.log(aa);
// }

// function bb(){
//     console.log(aa);
// }

// console.log("aa");
// bb();

const name = _ => "nsk";

const age = x =>x;

const sum = (x,y)=>x+y;

console.log(name())
console.log(age(19))

console.log(sum(7,9));

const obj = {
    name:"ma",
    age:19,
    fun:function(){
        console.log(this);
    },
    funOne:()=>{
        console.log(this);
    }
}

console.log(this);

