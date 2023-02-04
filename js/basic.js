// const x=5,y=6,z=7;
// const pera=(x+y+z)/2

// const area=Math.sqrt(pera*((pera-x)*(pera-y)*(pera-z)))
// console.log(area)

// current data nd Time

// let val1="w3schools"
// console.log(val1)
// setInterval(()=>
// {

//     val1=val1[val1.length-1]+val1.substring(0,val1.length-1)
// },1000)

// console.log(val1)
// const leapyear=(year)=>
// {
//     if(year%4===0){

//         if(year%100===0){

//             if(year%400===0){
//                     console.log("leap year is ",year)
//             }
//             else{
//                 console.log("not a leap year is not ",year)
//             }

//         }
//         else{
//             console.log("leap year is not ",year)
//         }
//     }
//     else{
//         console.log("leap year is not ",year)
//     }
// }
// leapyear(1200)

// var A= Math.floor(Math.random()*10)
// console.log(A)
// today=new Date()
// var crm=new Date(today.getFullYear(),11,25)
// console.log(crm)
// if(today.getMonth()==11 && today.getDate()>25)
// {
//     crm.setFullYear(crm.getFullYear()+1)
// }
// var one_day=1000*60*60*24
// // var
// str1="abc";
// times=3
// final="";

// function rec(str1,times){
//     if(times<=0)
//     {
//       return " ";
//     }else {
//         return(str1+ " "+ rec(str1,times-1))
//     }
// }
// console.log(rec(str1,2))
// console.log(("kanaram "+" ").repeat(10))
// arr=[]
// const someArray = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Smith" },
//     { id: 3, name: "Bob" },
//      ]
// someArray.forEach(ele=>{console.log(ele.name);})
// //console.log(someArray);
// someArray.map(ele=>{console.log("\nmap",ele.name);})
// //console.log(someArray);

// const somArray = [1, [2, 3], [4, 5]]

// console.log(somArray.flat())

// for (let i=0;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);},i*1000)
// }
// // let sD=new Date().getTime()
// let eD=sD;
// console.log(sD,eD)
// while(eD<sD+1000){
//     eD=new Date().getTime()
//     console.log("sD :",sD, "eD :",eD)
// }
// let sD=5
// let eD=sD;
// console.log(sD,eD)
// while(eD<sD+10){
//     eD=eD+1
//     console.log("sD :",sD, "eD :",eD)
// }

// function f(a,b,c){
//     m=["1","2"]
//     a=3
//     b[0]="X"
//     c.first=false;

// }
// var x=4,y=["A","B"],z={first:true}
// f(x,y,z)
// console.log(x,y,z)

// const in1={a:1,b:2,c:3,d:10,e:12}
// const in2={a:2,f:3,d:10,e:12,b:3}
// const out={}
// // outut={d:10,e:12}
// for( i in in1)
// {
//   if(in1[i]==in2[i])
//   {
//     out[i]=in1[i]
//   }
// console.log(in1[i])
// console.log(in2.a)
// }

//arrary rotate
// const inp=[2,7,11,4,-2]
// for( let i=0;i<2;i++){//
//     let temp=inp[0]  //temp=2
//     console.log(temp)
// for(let j=0;j<=inp.length-1;j++){
//     inp[j]=inp[j+1] //inp=[7,11,4,-2,un]
//     console.log(inp)
// }
// inp[inp.length-1]=temp
// console.log(inp)
// }
// console.log(inp)
// let person={
//     name:"kanaram",
//     lasname:"prajpaat",
//     greet()
// {
//     console.log("helelo")
// }
// }
// person.age=25

// person.greet()
// console.log(person)
// x=[1,3,7,9,9,8,7,0,6,5,6,5]
// y=x
// y[0]=123
// z=[...x]
// z[0]=789
// console.log(x)
// console.log(y)
// // console.log(z)

// let obj = {
//   name: "kanram",
//   age: 25,
//   address: {
//     city: "jaipur",
//     state: "rajasthan",
//   },
// };
// let usr=Object.assign({},obj)
// usr.age=40

// usr.address.city="raighar"
// console.log(obj)
// console.log(usr)
// // p=JSON.stringify(obj)
// y=Object.entries(obj)
// //console.log(y)
// y.forEach(e => {
//     console.log([...e])
// })

// N=[1,2,3,5,]
// N.map(e=>{console.log(e)})
// let a=N.((s,el)=>{s+el,0})
// console.log(a)
// const checckuniq=(str)=>{
//     x=[]
//     const arr=str.split("")
//     for(i=0;i<arr.length;i++)
//     {
//         for(j=1;j<arr.length;j++)
//         {
//             if(arr[i]==arr[j])
//             {
//                 x.push(arr[i])
//             }
//         }
//     }
//     console.log(x)
// }
// checckuniq("kanaram")

// var r="banana"
// function fruit()

// {
//     let price=50

//     console.log(r)
//     console.log(price)
//     var r="kanda"

// }
// fruit()
// console.log(r);
// let arr1=[1,2,3],arr2=[4,5,6],arr3=[7,8,9]
// let arr=[...arr1,...arr2]
// console.log(arr)
// function ff(...a){
//     console.log(a)
// }
// ff(arr1[0],arr1[1],arr1[2])
//  ff(...arr1,...arr2)
//map and foreach
// const abc=(elm)=>{
// console.log(elm*elm)
// }
// x=[1,2,3,6,4,7,8,5,7,9,10]
// //y=x.map(e=>e*e)
// x.forEach(e=>console.log(e*e));
// arry.map(callbackfunc(curr,i,arry))
//console.log(y);
// console.log(x);
// console.log(" ">-1);
// console.log(1+"10"+1+"10"+10+"10"+"1"-10);//1112001  //11011010 091
// console.log(8 - -7);
// const y=100
// let x=[1,2,3,4,5]
// x=[]

// console.log(x);
// const data={name:"kanram",age:25}
// const {name}=data
// console.log(name);
// console.log(x.sort((a,b)=>{return a-b}))

// x = [5, 4, 2, 8, 4, 90, 23, 45, 23, 653, 12, 342, 654];
// function checkfind(x,xx) {
    //   for (i of xx) {
        //     let z=x.indexOf((i))
        //     if (z !== -1) {
            //       console.log(i, "element present in array");
            //     } else {
                //       console.log(i ,"element not present in array");
                //     }
//                 //   }
//                 // }
// x = [5, 4, 2, 8, 4, ];
// xx = [2, 4, 90, 50, 100, 45, 123];
// // checkfind(x,xx);

// // xx.forEach((e)=>{
// //     let z=x.indexOf((e))
// //     if (z !== -1) {
// //       console.log(e, "element present in array");
// //     } else {
// //       console.log(e ,"element not present in array");
// //     }
// //   }

// // )
// // xx.forEach((e)=>{
// //     if(x.includes(e)) {
// //       console.log(e, "element present in array");
// //     } else {
// //       console.log(e ,"element not present in array");
// //     }
// //   }

// // )
// // // const oddEven=x.filter(odd=>{return odd%2==0})
// // const total=x.reduce((sum,val)=>sum+val,0)
// // // function odd(vale){
// // //     if(vale%2==0)
// // //     {
// // //         return vale
// // //     }
// // // }
// // console.log(total)
// // function higherorder(){
// // console.log(this);
// // }
// // higherorder()

// // var obj = {
// //   name:  "vivek",
// //   getName: function(){
// //   console.log(this.name);
// // }
// // }
 
// // obj.getName();

// function randomFunc(){
//   var obj1 = {name:"Vivian", age:45};

//   function abc(){
//     console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

//   }
//   abc()
// }

// randomFunc(); // Returns a function


// function myDisplayer(some) {
//   console.log(some);
// }

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();

// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//      console.log(i); }, 1000 + i);
// }
// for( i=0;i<5;i++){
  // // }
  // console.log("1");
  // setTimeout(() => {
  //   console.log("hello")
  // }, 0);
  
  // console.log("2");

  //   setTimeout(() => {
  //     console.log("o")
  //   }, 0);
  //   console.log("3");

//     console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

console.log('end');
const x=[1,2,3,4,5]
const y=x.map(e=>e*2)
console.log(y);

const z=[]
x.forEach(e=>z.push(e*2))
console.log(z);


var ab=10
var asd=()=>{
  var xx=20
  console.log(ab);
}
console.log(asd())