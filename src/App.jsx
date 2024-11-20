// import React,{useState} from 'react'
// import Slide from './components/Slide.jsx'
// const data =[
//   {image:"https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fHww",name:"Accordion",description:"lorem ipsum",friends:false},
//   {image:"https://images.unsplash.com/photo-1516297276-0fe32eb94534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBtZW58ZW58MHx8MHx8fDA%3D",name:"Sorium",description:"consectetur adipiscing",friends:false},
//   {image:"https://images.unsplash.com/photo-1635944201548-deff78d5e429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdoaXRlJTIwbWVufGVufDB8fDB8fHww",name:"danjour",description:"beka bekab",friends:false},
// ];
// function App() {
//   const [val,setVal]=useState(data);
//   const Change=(ind)=>{
//      setVal((val)=>{
//       return val.map((item,index)=>{
//         if(index===ind){
//           return {...item,friends:!item.friends}
//         }
//         else {
//           return item;
//         }
//       })
//     })
//   }
//   return (
//         <div  className='h-screen w-full flex justify-center items-center gap-4'>
//           {
//             val.map((item,index)=>{
//               return <Slide key={index}  values={item} index={index} Change={Change}/>
//             })
//           }
//         </div>
//   )
// }

// export default App


import React from 'react'
import Music from './components/Music'
import Navbar from './components/Navbar'
import {useState} from 'react'
function App() {
  const data = [
    {
      songName: "Tum hi ho",
      artistName: "Arjit Singh",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },
    {
      songName: "Dil Se Re",
      artistName: "A.R. Rahman",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },

    {
      songName: "Mera Dil Bhi Kitna Pagal Hai",
      artistName: "Alka Yagnik",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: true,
    },

    {
      songName: "Jeeta Tha Jiske Liye",
      artistName: "Kumar Sanu",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },
    {
      songName: "Shiv Tandav Stotram",
      artistName: "Shankar Mahadevan",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },

    {
      songName: "Haan Tu Hain",
      artistName: "K.K",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },
  ];

  const [songData, setSongData] = useState(data);
  const Handle=(index)=>{
    setSongData((prev)=>{
      return prev.map((song,ind)=>{
        if(ind===index){
          return {...song, favourites:!song.favourites}
        }
        else {
          return song;
        }
      })
    })
  }
  return (
    <>
     <Navbar songData={songData} />
     <div className='px-20 mt -32 flex flex-wrap gap-10 mt-10'>
      {
        songData.map((item,index)=>{
          return <Music key={index} values={item} Handle={Handle} index={index}/>
        })
      }
     </div>
    </>
  )
}

export default App