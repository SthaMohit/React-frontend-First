import React from 'react'
import Header from './components/Header'
import Cad from './components/Cad'
import './App.css'
import Option from './components/Option'

const App =()=> {
  let name="Hari"
  let lastname="Shrestha"
  
  const hero={
  name:"Matcha Milk Tea",
  image:"Boba.jpg",
  Price:120,
  discount:-5,
  new:"Buy Now"
}
let data=[

]

let arrayproduct=[
  {id :1,
  name:"Boba Milk Tea",
  image:"Boba.jpg" ,
  price:"Price RS: 129",
  discount:"Disc: -10",
  new:"Buy Now"
},
{
  id:2,
    name:"Thai Boba ",
       image:"Thaiboba.webp",
 price:"Price RS: 800",
   discount:"Disc: -20",
   new:"Buy Now"
 },
  {
   id:3,
   name:"Bad Milk",
   image:"logoimg.png",
   price:"Price  Rs: 900",
   discount:"Disc: -95",
   new:"Buy Now"

  }
]

  return (
    <>
    <div>
      <Header nam={name}  thar={lastname}/>


      {/* <div className="list"> */}
      {/* {
        arrayproduct.map( (value)=>{
          return(
          // <div key={value.id}>
          //   <p>{value.name}</p>
          //   <img src={value.image} alt="" />
          // </div>
          <Cad key ={value.id} products={value}/>
          )
        }
      )
      } */}
      <div className='b'>
        {
        arrayproduct.map((value)=>{
          return(
              <Option key={value.id}  pro={value}/>
          )
        }
      )
        }
        </div>

 {/* </div> */}
      {/* <Cad products={hero} /> */}
    </div></>
  )
}

export default App









// const App = ()=>{
//   let name ="Jerry"

//   const Add =(a,b)=>{
//     return(
//       <div>
//         {a+b}
//       </div>

//     )
//   }


// return (
//   <div>
//     <h1>This is {name}</h1>
//     {Add(5,7)}
//     Name:<input type="text" placeholder="Enter your name" />
// <table border={1}>
//   <tr>
//     <th>SN</th>
//     <th>Name</th>
//   </tr>
//   <tr>
//     <td>1</td>
//     <td>Mohit</td>
//   </tr>
// </table>
// </div>
// )
// }
// export  default  App










// const App =()=>{
// function add (a,b){
// return (a+b)
// }
//   return(
//  <div>
//  {add(10,30)} 
//  </div>
 
//   )
// }
// export default App