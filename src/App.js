import { Container } from 'react-bootstrap';
import NavbarC from './component/NavbarC';
import Hider from './component/Hider'
import Category from './component/Category'
import Cardse from './component/Cardse'
import './App.css';
import {items} from './component/data'
import { useState } from 'react';
function App() {
//to fetch data from array of data
  const [itemsData,setItemData]=useState(items)

  //to creat a new array with non-recurring values
  const allCategory=['الكل',...new Set(items.map((i)=>i.category))]

  //to filter data type in array of data
  const filterbycategory = (cat)=>{
    if(cat==='الكل'){
      setItemData(items)
    }else{
      const newArr = items.filter((item)=>item.category===cat)
      setItemData(newArr)
    }
  }
  //filter data by search
  const filterbysearch = (word)=>{
    if(word !== ""){
      const newArr = items.filter((item)=>item.title === word)
      setItemData(newArr)
    }
  }

  return (
    <div className="font color-body">
      <NavbarC filterbysearch={filterbysearch}/>
      <Container>
        <Hider/>
        <Category filterbycategory={filterbycategory} allCategory={allCategory}/>
        <Cardse itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
