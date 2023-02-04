import react, { useState } from "react";

const countries = [
  { Name: "india", value: "ind", city: ["jaipur", "udiapur"] },
  { Name: "pak", value: "pk", city: ["karchi", "paakisthan"] },
  { Name: "yurop", value: "euro", city: ["belgium", "brusheel"] },
  { Name: "bangla", value: "bg", city: ["desh", "bangaldekash"] },
];

function App() {
  //const [country,setCountry]=useState({ Name:"", value:"", city:[]})
  //const country={Name:"",value:"",city:[]}

  //   //let counter=0 const counter =0
  //   const [name, setName] = useState({ lastNmae: "js" });
  //   const [post, setPost] = useState(null);

  //   useEffect(() => {
  //     axios
  //      .get("https://api.publicapis.org/entries")
  //      .then((response) => setPost(response.data.entries.slice(0,10)))
  //      .catch((err) => console.log(err));
  //  }, []);

  // //cosnt name= {firstName:"ReactJS"}
  // const increment = (e) => {
  //   setName({ ...name, firstName: "javascript" });
  //   //cosnt name= {firstName:"Javascript"}
  // };

  // const posts = ["kana", "vimlesh", "ravi", "bhanu", "momu", "kanu"];
  
  //   <div className="App">
  //      <header className="App-header">
  //       {/* <div>{counter}</div> */}
  //       {/* <div>{name}</div>
  //       <div>{name.lastNmae}</div> */}

  //       {post.map((item) => {
  //         return (
  //           <ul>
  //             <li>{item.API}</li>
  //             {/* <li>{item.title}</li>
  //             <li>{item.id}</li> */}
  //           </ul>
  //         );
  //       })}

  //       <h1>{console.log(post)}</h1>
  //       <div>
  //       {/*    */}
  //         <button className="btn" onClick={(e) => increment(e)}>
  //           Increase the number
  //         </button>
  //         {/* <button className="btn" onClick={decrement}>Decrease the number</button> */}
  //       </div>
  //   </header>
  // </div>
  // );
  // return (
  // <div>
  //   <select value={country} onChange={(e)=>{setCountry(e.target.value)}}>
  //     {
  //       countries.map((item, index) => {
  //       return (<option value={item.value}>{item.Name}</option>)
  //     })
  //     }
  //   </select>

  //   <div>
  //   <select onChange={(e)=>{console.log(e.target.value)} }>
  //     {
  //       countries[country].city.map((item, index) => {
  //       return (<option value={index}>{item}</option>)
  //     })
  //     }
  //   </select>
  // </div>
const [counter, setCounter]=useState(0)
const increment=()=>{
  setCounter(counter+1)
}
  return(
<>
{/* <div>

<div>{counter}</div>
<button onClick={increment}>Increment</button>

<button onClick={()=>{setCounter(counter-1)}}>Decrement</button>
  </div> */}
  <div className="kana"  >
  <div>kanaram</div>
  </div>
  {/* for (var i = 0; i <3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
  } */}
  </>
  )
}

export default App;
