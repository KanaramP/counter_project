// const y=[...new Set(x)]
function uniq(x) {

//   x.forEach((element) => {
//     if (!y.includes(element)) {
//       y.push(element);
//     }
//   });
//   return y;
const z=x.reduce((y,e)=>{
    console.log(y,e);
    if(!(y.includes(e)) ){
        y.push(e)
        
    }
    return y
},[])

return z
}
const x = [1, 2, 3, 3, 2, 5, 7, 4, 5, 6, 7, 8, 9, 10];
console.log(uniq(x));
