import React from 'react'
import '../style/App.css';
import JSONDATA from '../MOCK_DATA.json';
import {useState} from 'react';

function SearchBar() {
  const [searchTerm,setSearchTerm] = useState('');


  return (
    <div className="searchBarContainer">
        <nav>
           <div className="searchBarContent">
              <input type="text" placeholder="Searching..." onChange={event=>{setSearchTerm(event.target.value)}}  />
              <button>Find</button>
           </div>
        </nav>

        {JSONDATA.filter((val) =>{
          if(searchTerm===''){
            return val
          }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())|| 
                   val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   val.gender.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        })
        .map((val,key) =>{
          return <div className='data' key={key}>{val.first_name}  {val.gender} </div>
        })}
    </div>
  )
}

export default SearchBar
