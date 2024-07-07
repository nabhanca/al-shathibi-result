import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imgheader from './assets/1.png'
import img from './assets/1.png'
import './App.css'
import { data } from './assets/data'

function App() {
  const [searchItem, setSearchItem] = useState('')
  const [filter,setFilter]=useState([])
  
const handleChange =(e)=>{
  setSearchItem(e.target.value)

  const filteredItems = data.filter((user) =>
    user.Name.toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilter(filteredItems);
}
console.log(filter);

  return (
    <>
          <div class="header">
        {/* <img src="./png 2.png" alt=""> */}
        <img src={img} alt="" />

    </div>
    <div class="card-section">
        <div class="container">
            <h1>Selected Candidates</h1>

<div className='search'>
<input type="search" value={searchItem} onChange={handleChange} placeholder='Search Here'/>
</div>
           

            <div class="card-wrapper" id="card-wrapper">
              {filter.length==0 || searchItem==''?
                data.map((item)=>(

                  <div class="card">
                  <div class="img-section">
                  {/* <img src="./Untitled-1.png" alt="">
                   */}
                   <img src={imgheader} alt="" />
                  </div>
                  <div class="info-section">
                      <p class="name">{item.Name}</p>
                      <p class="place">{item.Place}</p>
                      <p class="inst">Institution</p>
                      <p class="institution">{item.Institution}</p>
                  </div>

              </div>
                )):
                filter.map((item)=>(

                  <div class="card">
                  <div class="img-section">
                  {/* <img src="./Untitled-1.png" alt="">
                   */}
                   <img src={imgheader} alt="" />
                  </div>
                  <div class="info-section">
                      <p class="name">{item.Name}</p>
                      <p class="place">{item.Place}</p>
                      <p class="inst">Institution</p>
                      <p class="institution">{item.Institution}</p>
                  </div>

              </div>
                ))
                
              }
             
                </div>
                </div>
                </div>
    </>
  )
}

export default App
